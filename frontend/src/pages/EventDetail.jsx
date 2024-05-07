import { useParams } from 'react-router-dom'
import { useEventStore } from '../stores/EventStore'
import { useState } from 'react'
import { useFavouriteStore } from '../stores/FavouriteStore.js'

export const EventDetail = () => {
    const eventStore = useEventStore()
    const favouriteStore = useFavouriteStore()
    const { id } = useParams()

    const [event, setEvent] = useState(
        eventStore.events.find((event) => event.id === id)
    )

    const eventName = event.name
    const eventImage = event.images[9].url
    const artistName = event._embedded.attractions[0].name
    const venueName = event._embedded.venues[0].name
    const cityName = event._embedded.venues[0].city.name
    const eventDate = event.dates.start.localDate
    const eventDateFormatted = new Date(eventDate).toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    const eventTime = event.dates.start.localTime.substring(0, 5)

    const handlerClickFavourite = () => {
        favouriteStore.addFavourites(event)
    }

    const isInFavourites = (event) => {
        return favouriteStore.favourites.find(
            (favourite) => favourite.id === event.id
        )
    }

    const removeFavourite = (event) => {
        favouriteStore.removeFavourite(event)
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-8 pb-24 pt-10">
                <div className="mx-4">
                    <img
                        className="aspect-square rounded-xl object-cover md:max-w-[280px] lg:max-w-[420px]"
                        src={eventImage}
                        alt={eventImage}
                    />
                </div>
                <div className="mx-4 flex flex-col items-start justify-between gap-4">
                    <div className="flex flex-col items-start">
                        <div className="mb-6 flex flex-col items-start">
                            <h2 className="text-[24pt] font-bold text-[#FF7142]">
                                {eventName}
                            </h2>
                            <h3 className="py-1 text-[18pt] font-bold text-black">
                                {artistName}
                            </h3>
                        </div>
                        <div className="flex items-center gap-3 text-lg text-black">
                            <ion-icon name="pin-outline"></ion-icon>
                            <span className="flex items-center">
                                {venueName}, {cityName}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-lg text-black">
                            <ion-icon name="calendar-outline"></ion-icon>
                            <span>{eventDateFormatted}</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg text-black">
                            <ion-icon name="time-outline"></ion-icon>
                            <span>{eventTime}</span>
                        </div>
                    </div>
                    <div className="button-container cursor-pointer items-center text-xl hover:text-red-600">
                        {isInFavourites(event) ? (
                            <button
                                onClick={() => removeFavourite(event)}
                                className="border-1 flex flex-row items-center rounded-full border border-black bg-white p-2 text-black hover:border-black hover:text-red-500 hover:shadow-sm"
                            >
                                <ion-icon name="heart"></ion-icon>
                                <span className="ps-2 text-lg font-normal">
                                    Rimuovi dai preferiti
                                </span>
                            </button>
                        ) : (
                            <button
                                onClick={handlerClickFavourite}
                                className="border-1 flex flex-row items-center rounded-full border border-black bg-white p-2 text-black hover:border-black hover:text-red-500 hover:shadow-sm"
                            >
                                <ion-icon name="heart-outline"></ion-icon>
                                <span className="ps-2 text-lg font-normal">
                                    Aggiungi ai preferiti
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
