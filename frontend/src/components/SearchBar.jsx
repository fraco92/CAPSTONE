import { useEffect } from 'react'
import { useEventStore } from '../stores/EventStore'
import { useState } from 'react'

export const SearchBar = () => {
    const eventStore = useEventStore()

    const [name, setName] = useState(eventStore.search || '')

    useEffect(() => {
        if (name === '') {
            eventStore.getEvents(1, 20, null)
        }
    }, [name])

    const handleNameInput = (e) => {
        const filter = e.currentTarget.value
        setName(filter)
    }

    const search = (event) => {
        event.preventDefault()
        eventStore.getEvents(1, 20, name)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div>
                <input
                    className="inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg"
                    onChange={handleNameInput}
                    type="text"
                    value={name}
                    placeholder="Cerca un evento"
                />
            </div>
            <button
                onClick={search}
                className="border-1 flex flex-row items-center rounded-full border border-black bg-white p-2 text-lg font-normal text-black hover:border-black hover:text-red-500 hover:shadow-sm"
            >
                Cerca
            </button>
        </div>
    )
}
