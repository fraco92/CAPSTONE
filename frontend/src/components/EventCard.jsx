export const EventCard = ({ event }) => {
    const eventName = event.name
    const eventImage = event.images[0].url
    const artistName = event._embedded.attractions[0].name
    const venueName = event._embedded.venues[0].name
    const eventDateTime = new Date(event.dates.start.dateTime).toLocaleString()

    return (
        <>
            <div
                onClick={() => navigateTo(`/details/${event.id}`)}
                className="pointer bg-base-100 shadow- flex w-96 w-[280px] flex-col justify-center align-middle "
            >
                <img
                    className="h-[200px] object-cover"
                    src={eventImage}
                    alt={eventImage}
                />

                <div className="card-body flex items-start p-4">
                    <h2 className="card-title">{eventName}</h2>
                    <p>{artistName}</p>
                    {/* <p>Luogo: {venueName}</p> */}
                    {/* <p>Orario: {eventDateTime}</p> */}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Dettagli</button>
                        <button className="btn btn-primary">Ticket</button>
                    </div>
                </div>
            </div>
        </>
    )
}
