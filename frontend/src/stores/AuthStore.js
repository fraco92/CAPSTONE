import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
    persist(
        (set, get) => ({
            token: undefined,
            setToken: (token) => set({ token }),
            isLoggedIn: () => {
                return !!get().token
            },
        }),
        { name: 'token-storage' }
    )
)
