import { useParams } from 'react-router-dom'
import { useEventStore } from '../stores/EventStore'
import { useState } from 'react'

export const EventDetail = () => {
    const eventStore = useEventStore()
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
                <div className="mx-4 flex flex-col">
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
                </div>
            </div>
        </>
    )
}
