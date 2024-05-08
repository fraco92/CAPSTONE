import { useNavigate } from 'react-router-dom'

export const FavouriteCard = ({ event, removeFavourite }) => {
    const navigateTo = useNavigate()
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

    return (
        <>
            <div className="flex w-fit basis-1/5 flex-col items-center gap-28 rounded-2xl border p-4 text-black md:flex-row">
                <div
                    onClick={() => navigateTo(`/details/${event.id}`)}
                    className="flex w-[280px] cursor-pointer flex-col justify-center"
                >
                    <img
                        className="aspect-square  rounded-xl object-cover"
                        src={eventImage}
                        alt={eventName}
                    />

                    <div className="flex flex-col items-start pt-2">
                        <h2 className="overflow-hidden truncate text-ellipsis text-[10pt] font-bold">
                            {event.name}
                        </h2>
                        <p className="text-[10pt] font-medium text-red-500">
                            {artistName}
                        </p>
                        <p className="overflow-hidden truncate text-ellipsis text-[10pt]">
                            {venueName}, {cityName}
                        </p>
                        <p className="text-[10pt]">{eventDateFormatted}</p>
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
        </>
    )
}
