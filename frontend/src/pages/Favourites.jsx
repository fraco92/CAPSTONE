import { useAuthStore } from '../stores/AuthStore'
import { Navigate } from 'react-router-dom'
import { useFavouriteStore } from '../stores/FavouriteStore.js'
import { FavouriteCard } from '../components/FavouriteCard'
import { removeFavouriteFromDb } from '../api/Favourite.js'

//TODO  Create favourites page here
export const Favourites = () => {
    const favouriteStore = useFavouriteStore()
    const authStore = useAuthStore()

    const removeFavourite = (event) => {
        favouriteStore.removeFavourite(event)
        removeFavouriteFromDb(event.id, authStore.token?.token)
    }

    if (!authStore.isLoggedIn()) return <Navigate to="/login" />
    return (
        <div className="mx-10 mt-10 flex flex-col items-center">
            <h1 className="text-[54px] font-bold">Eventi preferiti</h1>
            <ul className="mx-10 mb-20 mt-10">
                {favouriteStore.favourites.length === 0 ? (
                    <li>
                        <span>Non hai eventi fra i preferiti</span>
                    </li>
                ) : (
                    favouriteStore.favourites.map((event, index) => (
                        <li key={index}>
                            <FavouriteCard
                                event={event}
                                removeFavourite={removeFavourite}
                            />
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}
