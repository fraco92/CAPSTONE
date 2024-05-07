import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useFavouriteStore = create(
    persist(
        (set, get) => ({
            favourites: [],
            addFavourites: (...favourites) =>
                set({ favourites: [...get().favourites, ...favourites] }),
            removeFavourite: (favourite) =>
                set({
                    favourites: get().favourites.filter(
                        (f) => f.id !== favourite.id
                    ),
                }),
        }),
        {
            name: 'favourite-store',
        }
    )
)
