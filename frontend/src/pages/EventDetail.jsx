import { useContext } from 'react'
import { useParams } from 'react-router-dom'

export const EventDetail = () => {
    const { id } = useParams()
    const { event } = useContext()

    const eventName = event.name
    const eventImage = event.images[0].url
    const artistName = event._embedded.attractions[0].name
    const venueName = event._embedded.venues[0].name
    const eventDateTime = new Date(event.dates.start.dateTime).toLocaleString()

    return <></>
}
