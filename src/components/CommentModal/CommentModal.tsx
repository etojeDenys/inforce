import React, {useState} from "react";
import FormInput from "../FormInput/FormInput";
import {useAppDispatch} from "../../hooks/react-redux";
import {addComment} from "../../store/slices/productSlice";

interface CommentModalProps {
    close: () => void,
    productId: number
}

const CommentModal: React.FC<CommentModalProps> = ({close, productId}) => {
    const [description, setDescription] = useState('')
    const dispatch = useAppDispatch()
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const {value} = e.target
        setDescription(value)
    }
    const handleSubmit: React.FormEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if (!description) {
            alert('Please enter a field')
            return
        }
        dispatch(addComment({
            description: description,
            id: Date.now(),
            productId: productId,
            date: new Date().toDateString()
        }))
        setDescription('')
        close()
    }

    return (
        <div className='modal__wrapper'>
            <div className="modal">
                <form action="">
                    <FormInput
                        label='Description:'
                        handleChange={handleChange}
                        value={description}
                        type='text'
                        name='description'
                    />
                    <button onClick={handleSubmit}>Add</button>
                    <button type='button' onClick={close}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default CommentModal