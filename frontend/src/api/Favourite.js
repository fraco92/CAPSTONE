export const addToFavouriteDb = async (favourite, token) => {
    fetch('http://localhost:3030/api/favourites', {
        method: 'POST',
        headers: {
            'jwt-token': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(favourite),
    })
}

export const getFavouritesFromDb = async (token) => {
    const response = await fetch('http://localhost:3030/api/favourites', {
        headers: {
            'jwt-token': token,
        },
    })
    return await response.json()
}

export const removeFavouriteFromDb = async (id, token) => {
    fetch('http://localhost:3030/api/favourites', {
        method: 'DELETE',
        headers: {
            'jwt-token': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    })
}
