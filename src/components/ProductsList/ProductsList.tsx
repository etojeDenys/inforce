import React, {useState} from "react";
import {useAppSelector} from "../../hooks/react-redux";
import ProductPreview from "../ProductPreview/ProductPreview";

import './products-list.styles.scss'
import ProductModal from "../ProductModal/ProductModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";


const ProductsList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [deleteProductId, setDeleteProductId] = useState(0)
    // TODO Add sortBy functionality
    const [sortBy, setSortBy] = useState('name')
    const productsList = useAppSelector(state => state.product.products)

    return (
        <>
            {isModalOpen && <ProductModal close={() => setIsModalOpen(false)}/>}
            {deleteProductId ?
                <ConfirmModal close={() => setDeleteProductId(0)} productIdToDelete={deleteProductId}/> : ''}
            <button onClick={() => setIsModalOpen(true)} className='add-new-item'>Add new Product</button>
            <div className='products-list'>
                {productsList.map(({id, name, imageUrl, count}) => (
                    <ProductPreview
                        key={id}
                        name={name}
                        imageUrl={imageUrl}
                        count={count}
                        id={id}
                        openDeleteModal={(id: number) => setDeleteProductId(id)}
                    />))}
            </div>
        </>
    )
}


export default ProductsList