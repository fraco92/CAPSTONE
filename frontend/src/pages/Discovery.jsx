import { useEffect, useState } from 'react'
import { EventCard } from '../components/EventCard'
import { useSearchParams } from 'react-router-dom'
import { useEventStore } from '../stores/EventStore'

export const Discovery = () => {
    const [events, setEvents] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const { setEvents: setEventStoreEvents } = useEventStore()
    useEffect(() => {
        setEventStoreEvents(events)
    }, [events, setEventStoreEvents])

    useEffect(() => {
        fetch(
            `http://localhost:3030/api/events?page=${searchParams.get('page') || 1}`
        )
            .then((res) => res.json())
            .then((eventData) => setEvents(eventData.events))
            .catch((error) => console.log(error))
    }, [searchParams.get('page')])

    return (
        <>
            <div className="mx-8 mb-16 grid grid-flow-row gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </>
    )
}
