import { SingleComment } from './SingleComment'

export const CommentList = ({ comments, onCommentDelete }) => {
    return (
        <ul className="overflow-y-scroll">
            {comments.map((comment, index) => (
                <SingleComment
                    comment={comment}
                    key={index}
                    onCommentDelete={onCommentDelete}
                />
            ))}
        </ul>
    )
}
