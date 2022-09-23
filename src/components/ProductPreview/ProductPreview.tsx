import React from "react";

import './product-preview.styles.scss'
import {useNavigate} from "react-router-dom";
interface ProductPreviewProps {
    imageUrl: string,
    name:string,
    count:number,
    id:number,
    openDeleteModal:(id:number)=>void
}

const ProductPreview: React.FC<ProductPreviewProps> = ({imageUrl,name,id,openDeleteModal}) => {
    const navigate = useNavigate()
    const deleteItem: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        openDeleteModal(id)
    }

    return (
        <li className='product-preview' onClick={()=>{navigate(`/${id}`)}}>
            <img src={imageUrl} className='product-preview__img' alt=""/>
            <h3 className='product-preview__title'>{name}</h3>
            <button onClick={deleteItem} className='product-preview__btn'>Delete</button>
        </li>
    )
}

export default ProductPreview