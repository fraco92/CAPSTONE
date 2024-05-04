import { useNavigate } from 'react-router-dom'

export const EventCard = ({ event }) => {
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
    const eventTime = event.dates.start.localTime.substring(0, 5)

    return (
        <>
            <div className="basis-1/5 text-black">
                <div
                    onClick={() => navigateTo(`/details/${event.id}`)}
                    className="flex w-[280px] cursor-pointer flex-col justify-center"
                >
                    <img
                        className="aspect-square  rounded-xl object-cover"
                        src={eventImage}
                        alt={eventImage}
                    />

                    <div className="flex flex-col items-start pt-2">
                        <h2 className="overflow-hidden truncate text-ellipsis text-[10pt] font-bold">
                            {eventName}
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
            </div>
        </>
    )
}
