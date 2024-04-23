import { useEffect, useState } from 'react'
import { EventCard } from '../components/EventCard'
import { useSearchParams } from 'react-router-dom'

export const Discovery = () => {
    const [events, setEvents] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

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
            <div className="flex flex-wrap gap-10">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </>
    )
}
