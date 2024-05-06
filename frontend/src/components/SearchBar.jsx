import { useEventStore } from '../stores/EventStore'
import { useState } from 'react'

export const SearchBar = () => {
    const eventStore = useEventStore()

    const [name, setName] = useState('')
    const [city, setCity] = useState('')

    const handlerInput = (e) => {
        const filter = e.currentTarget.value
        eventFilter(filter) // Chiamata alla funzione di filtro degli eventi
        setCity(filter) // Aggiornamento dello stato della città
    }

    const eventFilter = (filter) => {
        eventStore.filter((event) =>
            event.name.toLowerCase().includes(filter.toLowerCase())
        )
    }

    return (
        <div className="flex justify-center gap-4">
            <div>
                <input
                    className="inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg"
                    onChange={handlerInput}
                    type="text"
                    value={name}
                    placeholder="Cerca un evento/artista"
                />
            </div>
            <div>
                <ion-icon name="pin-outline"></ion-icon>
                <input
                    className="inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg"
                    onChange={handlerInput}
                    type="text"
                    value={city}
                    placeholder="Cerca per città"
                />
            </div>
        </div>
    )
}
