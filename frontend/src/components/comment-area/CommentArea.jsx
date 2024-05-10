import { AddComment } from './AddComment'
import { CommentList } from './CommentList'
import { getComments } from '../../api/comments'
import { useAuthStore } from '../../stores/AuthStore'
import { useState, useEffect } from 'react'

export const CommentArea = ({ event }) => {
    const authStore = useAuthStore()
    const eventId = event.id

    const [comments, setComments] = useState([])

    const onCommentCreated = (comment) => {
        if (comment) setComments([...comments, comment])
    }

    const onCommentDelete = (commentId) => {
        setComments(comments.filter((comment) => comment.id !== commentId))
    }

    useEffect(() => {
        getComments(eventId).then((comments) => {
            setComments(comments)
        })
    }, [])

    return (
        <>
            <div className="flex flex-col items-center p-4 shadow-md">
                <h1 className="mb-8 text-[24pt]">Commenti</h1>
                <CommentList
                    comments={comments}
                    onCommentDelete={onCommentDelete}
                />
                {authStore.isLoggedIn() && (
                    <AddComment
                        eventId={eventId}
                        onCommentCreated={onCommentCreated}
                    />
                )}
            </div>
        </>
    )
}
