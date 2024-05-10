import { useEffect } from 'react'
import { useAuthStore } from '../../stores/AuthStore'
import { deleteComment } from '../../api/comments'
import { Dropdown } from 'flowbite-react'
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
            <li className="flex flex-row justify-between px-8 pb-4 text-left">
                <div>
                    <h1 className="py-1 text-[10pt] font-thin text-red-500">
                        {comment.User.username}:
                    </h1>
                    <p className="text-wrap font-thin">{comment.comment}</p>
                </div>
                {authStore.token?.email === comment.User.email && (
                    <>
                        <div className="ps-4">
                            <button
                                className="border-none bg-white text-[10pt] font-thin hover:text-red-500"
                                onClick={deleteCommentHandler}
                            >
                                Elimina
                            </button>
                        </div>
                    </>
                )}
            </li>
            <hr className="my-2" />
        </>
    )
}
