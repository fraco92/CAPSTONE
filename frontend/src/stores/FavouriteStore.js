import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export const useFavouriteStore = create(
    (set, get) => ({
        favourites: [],
        addFavourite: (favourite) => {
            set({ favourites: [...get().favourites, favourite] })
        },
        setFavourites: (favourites) => set({ favourites }),
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
