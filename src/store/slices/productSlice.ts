import {createSlice} from "@reduxjs/toolkit";
import {IProduct} from "../../interfaces";

interface IInitialState {
    products: Array<IProduct>,
}

const initialState: IInitialState = {
    products: [{
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1551515300-2d3b7bb80920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBtb3VzZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        name: "Mouse",
        count: 100,
        size: {
            width: 300,
            height: 300
        },
        weight: "50g",
        comments: []
    },
        {
            id: 2,
            imageUrl: "https://www.ixbt.com/img/n1/news/2022/8/4/169eb8e539c9a3f019a76b7c44126578_large.jpeg",
            name: "Phone",
            count: 1,
            size: {
                width: 100,
                height: 100
            },
            weight: "100g",
            comments: []
        },
        {
            id: 3,
            imageUrl: "https://umschool.com.ua/assets/cache/images/x-noutbuk-i-3.b73.jpg",
            name: "Laptop",
            count: 10,
            size: {
                width: 400,
                height: 400
            },
            weight: "700g",
            comments: []
        },
        {
            id: 4,
            imageUrl: "https://fastdeal.co.ke/wp-content/uploads/2022/02/ad80hw-500x500-1.jpg",
            name: "Display",
            count: 20,
            size: {
                width: 300,
                height: 350
            },
            weight: "550g",
            comments: []
        }
    ],
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        deleteProduct(state, action) {
            state.products = [...state.products.filter(product => product.id !== action.payload)]
        },
        addProduct(state, action) {
            state.products.push(action.payload)
        },
        editProduct(state, action) {
            state.products = state.products.map(product => product.id === action.payload.id ? action.payload : product)
        },
        addComment(state, action) {
            state.products = state.products.map(product => {
                if (product.id === action.payload.productId) {
                    return {...product, comments: [...product.comments, action.payload]}
                }
                return product
            })
        },
        deleteComment(state, action) {
            state.products = state.products.map(product => {
                if (product.id === action.payload.productId) {
                    return {...product, comments: product.comments.filter(comment => comment.id !== action.payload.id)}
                }
                return product
            })
        }
    }
})

const productReducer = productSlice.reducer
export default productReducer

export const {deleteProduct, addProduct, editProduct, addComment, deleteComment} = productSlice.actions