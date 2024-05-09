import { useEffect } from 'react'
import { useAuthStore } from '../../stores/AuthStore'
import { deleteComment } from '../../api/comments'
export const SingleComment = ({ comment, onCommentDelete }) => {
    const authStore = useAuthStore()

    const deleteCommentHandler = async (e) => {
        e.preventDefault()
        deleteComment(comment.id, authStore.token?.token).then(() => {
            onCommentDelete(comment.id)
        })
    }

    return (
        <>
            <li className="px-8 pb-4 text-left">
                <h1 className="text-[10pt] font-thin">
                    {comment.User.username}
                </h1>
                <p>{comment.comment}</p>
                {authStore.token?.email === comment.User.email && (
                    <button onClick={deleteCommentHandler}>Cancella</button>
                )}
            </li>
        </>
    )
}
