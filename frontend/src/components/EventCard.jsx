import { useNavigate } from 'react-router-dom'

export const EventCard = ({ event }) => {
    const eventName = event.name
    const eventImage = event.images[9].url
    const artistName = event._embedded.attractions[0].name
    const venueName = event._embedded.venues[0].name
    const eventDateTime = new Date(event.dates.start.dateTime).toLocaleString()
    const navigateTo = useNavigate()

    return (
        <>
            <div className="basis-1/5 text-black">
                <div
                    onClick={() => navigateTo(`/details/${event.id}`)}
                    className="flex w-[280px] cursor-pointer flex-col justify-center"
                >
                    <img
                        className="aspect-square  rounded-xl object-cover"
                        src={eventImage}
                        alt={eventImage}
                    />

                    <div className="flex items-start p-4">
                        <h2 className="">{eventName}</h2>
                        <p>{artistName}</p>
                        {/* <p>Luogo: {venueName}</p> */}
                        {/* <p>Orario: {eventDateTime}</p> */}
                        <div className="justify-end">
                            <button className="btn btn-primary">
                                Dettagli
                            </button>
                            <button className="btn btn-primary">Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
