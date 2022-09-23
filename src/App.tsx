import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import ProductsList from "./components/ProductsList/ProductsList";
import Product from "./components/Product/Product";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route  path='/' element={<Layout/>}>
                    <Route path='/' element={<ProductsList/>}/>
                    <Route path='/:id' element={<Product/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
