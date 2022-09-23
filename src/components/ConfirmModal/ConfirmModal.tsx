import React from "react";
import {useAppDispatch} from "../../hooks/react-redux";
import {deleteProduct} from "../../store/slices/productSlice";

interface ConfirmModalProps{
    close: ()=>void,
    productIdToDelete: number
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({close,productIdToDelete}) => {
    const dispatch = useAppDispatch()

    const handleClick:React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(deleteProduct(productIdToDelete))
        close()
    }

    return (
        <div className="modal__wrapper">
            <div className="modal">
                <h3>Are you sure you want to delete this product?</h3>
                <button onClick={close}>Cancel</button>
                <button onClick={handleClick}>Delete</button>
            </div>
        </div>
    )
}

export default ConfirmModal