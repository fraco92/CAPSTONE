export const EventDetail = ({ event }) => {
    const eventName = event.name
    const eventImage = event.images[0].url
    const artistName = event._embedded.attractions[0].name
    const venueName = event._embedded.venues[0].name
    const eventDateTime = new Date(event.dates.start.dateTime).toLocaleString()

    return <></>
}
