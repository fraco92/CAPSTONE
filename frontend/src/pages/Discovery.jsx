import { useEffect, useState } from 'react'
import { EventCard } from '../components/EventCard'
import { useSearchParams } from 'react-router-dom'
import { useEventStore } from '../stores/EventStore'

export const Discovery = () => {
    const [events, setEvents] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const eventStore = useEventStore()
    useEffect(() => {
        console.log('questo: ', events)
        eventStore.setEvents(events)
    }, [events])

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
            <div>
                <h1 className="mt-10 text-[24pt] font-bold text-black">
                    I prossimi eventi
                </h1>
            </div>
            <div className="mt-10 flex flex-row flex-wrap justify-center gap-4 pb-14">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </>
    )
}

// mx-8 mb-16 grid grid-flow-row gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
