export const EventCard = ({ event }) => {
    const eventName = event.name
    const eventImage = event.images[0].url
    const artistName = event._embedded.attractions[0].name
    const venueName = event._embedded.venues[0].name
    const eventDateTime = new Date(event.dates.start.dateTime).toLocaleString()

    return (
        <div className="w-60">
            {/* Titolo dell'evento */}
            <h2>{eventName}</h2>
            {/* Cover immagine */}
            <img src={eventImage} alt={eventName} />
            {/* Nome dell'artista */}
            <p>Artista: {artistName}</p>
            {/* Luogo dell'evento */}
            <p>Luogo: {venueName}</p>
            {/* Orario dell'evento */}
            <p>Orario: {eventDateTime}</p>
        </div>
    )
}
