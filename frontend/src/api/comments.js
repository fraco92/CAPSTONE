'http://localhost:3030/api'

export async function getComments(eventId) {
    const response = await fetch(
        `http://localhost:3030/api/comments/${eventId}`
    )

    return response.json()
}

export async function createComment(eventId, comment, token) {
    if (!token) throw new Error('No token provided')

    const response = await fetch(
        `http://localhost:3030/api/comments/${eventId}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'jwt-token': token,
            },
            body: JSON.stringify({ comment }),
        }
    )

    return response.json()
}

export async function deleteComment(commentId, token) {
    if (!token) throw new Error('No token provided')

    const response = await fetch(
        `http://localhost:3030/api/comments/${commentId}`,
        {
            method: 'DELETE',
            headers: {
                'jwt-token': token,
            },
        }
    )

    return response.json()
}
