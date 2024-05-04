import { useEffect, useState } from 'react'
import { EventCard } from '../components/EventCard'
import { useSearchParams, useLocation } from 'react-router-dom'
import { useEventStore } from '../stores/EventStore'
import { SearchBar } from '../components/SearchBar'
import { Pagination } from 'flowbite-react'

export const Discovery = () => {
    const [events, setEvents] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState(
        parseInt(searchParams.get('page')) || 1
    )
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [city, setCity] = useState('')
    const { totalPages, getEvents } = useEventStore((state) => ({
        getEvents: state.getEvents,
        totalPages: state.totalPages,
    }))
    const location = useLocation()

    useEffect(() => {
        getEvents(currentPage, itemsPerPage).then((events) => {
            if (events.status === 'success') setEvents(events.data)
            else console.error('Error fetching events', events)
        })
    }, [currentPage, itemsPerPage, searchParams.get('page'), city])

    const onPageChange = (page) => {
        setSearchParams({ page: page })
        setCurrentPage(page)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div>
                <h1 className="mt-10 text-[24pt] font-bold text-black">
                    I prossimi eventi
                </h1>
                <div className="mt-10">
                    {location.pathname === '/discovery' && <SearchBar />}
                </div>
            </div>
            <div className="mt-10 flex flex-row flex-wrap justify-center gap-4 pb-14">
                {events?.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
            <div className="mb-20 flex gap-3 overflow-x-auto sm:justify-center">
                {location.pathname === '/discovery' && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                        showIcons
                        previousLabel="Precedente"
                        nextLabel="Avanti"
                    />
                )}
            </div>
        </>
    )
}
