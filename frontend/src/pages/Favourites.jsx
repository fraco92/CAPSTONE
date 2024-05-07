import { useAuthStore } from '../stores/AuthStore'
import { Navigate } from 'react-router-dom'
import { useFavouriteStore } from '../stores/FavouriteStore.js'

//TODO  Create favourites page here
export const Favourites = () => {
    const favouriteStore = useFavouriteStore()
    const authStore = useAuthStore()

    const removeFavourite = (event) => {
        favouriteStore.removeFavourite(event)
    }

    if (!authStore.isLoggedIn()) return <Navigate to="/login" />
    return (
        <div>
            <h1>Eventi preferiti</h1>
            <ul className="mx-10 mb-20 mt-10">
                {favouriteStore.favourites.map((event, index) => (
                    <li key={index}>
                        <div className="flex w-fit basis-1/5 flex-row items-center gap-28 rounded-2xl border p-4 text-black">
                            <div
                                onClick={() =>
                                    navigateTo(`/details/${event.id}`)
                                }
                                className="flex w-[280px] cursor-pointer flex-col justify-center"
                            >
                                <img
                                    className="aspect-square  rounded-xl object-cover"
                                    src={event.images[9].url}
                                    alt={event.name}
                                />

                                <div className="flex flex-col items-start pt-2">
                                    <h2 className="overflow-hidden truncate text-ellipsis text-[10pt] font-bold">
                                        {event.name}
                                    </h2>
                                    <p className="text-[10pt] font-medium text-red-500">
                                        {event._embedded.attractions[0].name}
                                    </p>
                                    <p className="overflow-hidden truncate text-ellipsis text-[10pt]">
                                        {event._embedded.venues[0].name},{' '}
                                        {event._embedded.venues[0].city.name}
                                    </p>
                                    <p className="text-[10pt]">
                                        {event.dates.start.localDate}
                                    </p>
                                </div>
                            </div>
                            <div className="button-container cursor-pointer items-center text-xl hover:text-red-600">
                                <button
                                    onClick={() => removeFavourite(event)}
                                    className="border-1 flex flex-row items-center rounded-full border border-black bg-white p-2 text-lg font-normal text-black hover:border-black hover:text-red-500 hover:shadow-sm"
                                >
                                    Elimina dai preferiti
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
