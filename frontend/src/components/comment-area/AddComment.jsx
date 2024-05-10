import { createComment } from '../../api/comments'
import { useState } from 'react'
import { useAuthStore } from '../../stores/AuthStore'
export const AddComment = ({ eventId, onCommentCreated }) => {
    const authStore = useAuthStore()
    const [comment, setComment] = useState('')

    const sendCommentHandler = (e) => {
        e.preventDefault()
        createComment(eventId, comment, authStore.token?.token).then(
            (response) => {
                onCommentCreated && onCommentCreated(response.data)
                setComment('')
            }
        )
    }

    return (
        <>
            <div className="sticky flex flex-col items-center">
                <textarea
                    className="mt-3 rounded-md border p-2 font-thin"
                    name="comment"
                    cols="30"
                    rows="3"
                    onChange={(e) => setComment(e.target.value)}
                    required
                    value={comment}
                    placeholder="Inserisci il tuo commento"
                ></textarea>

                <button
                    onClick={sendCommentHandler}
                    className="border-1 mt-2 flex flex-row items-center rounded-full border border-black bg-white p-2 text-black hover:border-black hover:text-red-500 hover:shadow-sm"
                >
                    Invia commento
                </button>
            </div>
        </>
    )
}
