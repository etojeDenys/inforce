import React from "react";

import './comment.styles.scss'
import {useAppDispatch} from "../../hooks/react-redux";
import {deleteComment} from "../../store/slices/productSlice";

interface CommentProps {
    description: string,
    date: string,
    id: number,
    productId: number
}

const Comment: React.FC<CommentProps> = ({description, date, id,productId}) => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(deleteComment({id:id,productId:productId}))
    }

    return (
        <div className='comment'>
            <p className='comment__text'>{description}</p>
            <span className="comment__date">{date}</span>
            <button type='button' onClick={handleClick}>Delete</button>
        </div>
    )
}
export default Comment