import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { baseURL } from '../api'

export const useEventStore = create(
    persist(
        (set, get) => ({
            events: [],
            totalPages: 0,
            searchKeyword: undefined,
            setEvents: (events) => set({ events }),
            getEvents: async (
                page = 0,
                itemsPerPage = 20,
                search = undefined
            ) => {
                const state = get()

                if (search) {
                    Object.assign(state, {
                        searchKeyword: search,
                        events: [],
                        totalPages: 0,
                    })
                    set(state)
                }

                if (search === null && state.searchKeyword !== undefined) {
                    Object.assign(state, {
                        searchKeyword: undefined,
                        page: 0,
                        events: [],
                    })
                    set(state)
                }

                // How many pages are missing
                const missingPages = Math.max(
                    page - Math.ceil(state.events.length / itemsPerPage),
                    0
                )

                // If there are no missing pages, return the events
                if (missingPages === 0) {
                    const events = state.events.slice(
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
                        baseURL +
                            `/api/events?page=${page}&itemsPerPage=${itemsPerPage}&search=${search || state.searchKeyword || ''}`
                    ).then((res) => res.json())
                    const eventData = data._embedded

                    Object.assign(state, { totalPages: data.page.totalPages })
                    set(state)

                    // If there are more than 1 missing pages, fetch the missing pages
                    if (missingPages > 1) {
                        state.getEvents(page - 1, itemsPerPage).then(() => {
                            Object.assign(state, {
                                events: [...state.events, ...eventData.events],
                            })
                            set(state)
                        })

                        return {
                            status: 'success',
                            data: eventData.events.slice(0, itemsPerPage),
                        }
                    } else {
                        const events = [
                            ...state.events,
                            ...eventData.events,
                        ].slice((page - 1) * itemsPerPage, page * itemsPerPage)
                        Object.assign(state, { events })
                        set(state)
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
