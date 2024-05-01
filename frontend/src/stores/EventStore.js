import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useEventStore = create(
    persist(
        (set) => ({
            events: [],
            setEvents: (events) => set({ events }),
        }),
        { name: 'event-storage' }
    )
)
