import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/react-redux";
import './product.styles.scss'
import ProductModal from "../ProductModal/ProductModal";
import CommentModal from "../CommentModal/CommentModal";
import Comment from "../Comment/Comment";

const Product: React.FC = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
    let params = useParams()
    let id = params.id || '0'
    const product = useAppSelector(state => state.product.products).find(product => product.id === +id)
    if (!product) {
        return <h1>Error</h1>
    }
    return (
        <>
            {isEditModalOpen && <ProductModal close={() => setIsEditModalOpen(false)} product={product}/>}
            {isCommentModalOpen && <CommentModal close={() => setIsCommentModalOpen(false)} productId={+id}/>}

            <div className='product'>
                <div className='product__content'>
                    <h3 className='product__title'>{product.name}</h3>
                    <span className="product__count">Count: {product.count}</span>
                    <span className="product__size">Size: {product.size.width}x{product.size.height}</span>
                    <span className="product__weight">Weight: {product.weight}</span>
                    <button className='product__edit' onClick={() => setIsEditModalOpen(true)}>Edit</button>
                    <button className='product__edit' onClick={() => setIsCommentModalOpen(true)}>Add Comment</button>
                </div>
                <img src={product.imageUrl} className='product__img' alt=""/>
            </div>
            <div className="comments">
                {
                    product.comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            description={comment.description}
                            id={comment.id}
                            date={comment.date}
                            productId={comment.productId}
                        />))
                }
            </div>
        </>
    )
}

export default Product