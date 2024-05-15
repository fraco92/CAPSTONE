import { useEffect, useState } from 'react'
import { EventCard } from '../components/EventCard'
import { useSearchParams, useLocation, Link } from 'react-router-dom'
import { useEventStore } from '../stores/EventStore'
import { Pagination } from 'flowbite-react'

export const Discovery = () => {
    const [events, setEvents] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState(
        parseInt(searchParams.get('page')) || 1
    )
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const eventStore = useEventStore()
    const location = useLocation()

    useEffect(() => {}, [eventStore.searchKeyword])

    useEffect(() => {
        eventStore.getEvents(currentPage, itemsPerPage).then((events) => {
            if (events.status === 'success') setEvents(events.data)
            else console.error('Error fetching events', events)
        })
    }, [
        eventStore.searchKeyword,
        currentPage,
        itemsPerPage,
        searchParams.get('page'),
    ])

    const onPageChange = (page) => {
        setSearchParams({ page: page })
        setCurrentPage(page)
        window.scrollTo(0, 0)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div>
                {location.pathname === '/discovery' && (
                    <h1 className="mt-10 text-[24pt] font-bold text-black">
                        I prossimi eventi
                    </h1>
                )}
            </div>
            <div className="mt-20 flex flex-row flex-wrap justify-center gap-4 pb-14">
                {events?.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
            {location.pathname === '/' && (
                <Link to="/discovery" onClick={scrollToTop}>
                    <button className="border-1 rounded-full border border-black bg-white text-black hover:border-black hover:text-red-500 hover:shadow-sm">
                        Scopri di più
                    </button>
                </Link>
            )}
            <div className="mb-20 flex justify-center gap-3 overflow-x-auto">
                {location.pathname === '/discovery' && (
                    <Pagination
                        className="p-4"
                        currentPage={currentPage}
                        totalPages={eventStore.totalPages}
                        onPageChange={onPageChange}
                        showIcons
                        previousLabel=""
                        nextLabel=""
                    />
                )}
            </div>
        </>
    )
}
