import FormInput from "../FormInput/FormInput";
import {IProduct} from "../../interfaces";
import React, {useState} from "react";

import './product-modal.styles.scss'
import {addProduct, editProduct} from "../../store/slices/productSlice";
import {useAppDispatch} from "../../hooks/react-redux";

interface ProductModalProps {
    close: () => void,
    product?: IProduct
}

const ProductModal: React.FC<ProductModalProps> = ({close, product}) => {
    const [newProduct, setNewProduct] = useState<IProduct>(() => product || {
        id: 0,
        name: '',
        count: 0,
        size: {width: 0, height: 0},
        weight: '',
        comments: [],
        imageUrl: ''
    })
    const dispatch = useAppDispatch()

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const {name, value} = e.target
        setNewProduct({...newProduct, [name]: value})
    }

    const handleSubmit: React.FormEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if (!newProduct.name || !newProduct.count || !newProduct.size.width || !newProduct.size.height || !newProduct.weight || !newProduct.imageUrl) {
            alert('Please enter all fields')
            return
        }
        if (product) {
            dispatch(editProduct({...newProduct}))
        } else {
            dispatch(addProduct({...newProduct, id: Date.now()}))
        }
        setNewProduct({
            id: 0,
            name: '',
            count: 0,
            size: {width: 0, height: 0},
            weight: '',
            comments: [],
            imageUrl: ""
        })
        close()
    }

    return (
        <div className='modal__wrapper'>
            <div className='modal'>
                <form>
                    <FormInput
                        label='Name'
                        handleChange={handleChange}
                        value={newProduct.name}
                        type='text'
                        name='name'
                    />
                    <FormInput
                        label='Image URL'
                        handleChange={handleChange}
                        value={newProduct.imageUrl}
                        type='text'
                        name='imageUrl'
                    />
                    <FormInput
                        label='Count'
                        handleChange={handleChange}
                        value={newProduct.count}
                        type='number'
                        name='count'
                        min={'0'}
                    />
                    <div className='modal__flex'>
                        <FormInput
                            label='Width'
                            handleChange={(e) => {
                                setNewProduct({...newProduct, size: {...newProduct.size, width: +e.target.value}})
                            }}
                            value={newProduct.size.width}
                            type='number'
                            name='width'
                            min={'0'}
                        />
                        <FormInput
                            label='Height'
                            handleChange={(e) => {
                                setNewProduct({...newProduct, size: {...newProduct.size, height: +e.target.value}})
                            }}
                            value={newProduct.size.height}
                            type='number'
                            name='height'
                            min={'0'}
                        />
                    </div>
                    <FormInput
                        label='Weight'
                        handleChange={handleChange}
                        value={newProduct.weight}
                        type='text'
                        name='weight'
                    />
                    <button onClick={handleSubmit}>{product ? 'Edit' : 'Add'}</button>
                    <button type='button' onClick={close}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default ProductModal