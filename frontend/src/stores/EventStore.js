import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useEventStore = create(
    persist(
        (set, get) => ({
            events: [],
            totalPages: 0,
            setEvents: (events) => set({ events }),
            getEvents: async (page = 0, itemsPerPage = 20) => {
                // How many pages are missing
                const missingPages = Math.max(
                    page - Math.ceil(get().events.length / itemsPerPage),
                    0
                )

                // If there are no missing pages, return the events
                if (missingPages === 0) {
                    const events = get().events.slice(
                        (page - 1) * itemsPerPage,
                        page * itemsPerPage
                    )

                    return {
                        status: 'success',
                        data: events,
                    }
                }
                try {
                    // fetch needed page
                    const data = await fetch(
                        `http://localhost:3030/api/events?page=${page}&itemsPerPage=${itemsPerPage}`
                    ).then((res) => res.json())
                    const eventData = data._embedded
                    set({ totalPages: data.page.totalPages })

                    // If there are more than 1 missing pages, fetch the missing pages
                    if (missingPages > 1) {
                        get()
                            .getEvents(page - 1, itemsPerPage)
                            .then(() => {
                                set({
                                    events: [
                                        ...get().events,
                                        ...eventData.events,
                                    ],
                                })
                            })

                        return {
                            status: 'success',
                            data: eventData.events.slice(0, itemsPerPage),
                        }
                    } else {
                        const events = [
                            ...get().events,
                            ...eventData.events,
                        ].slice((page - 1) * itemsPerPage, page * itemsPerPage)
                        set({ events })
                        return { status: 'success', data: events }
                    }
                } catch (e) {
                    return { status: 'error', data: e }
                }
            },
        }),
        { name: 'event-storage' }
    )
)
