import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './Homepage';
import Products from './Shop/Products';
import ProductPage from './Shop/ProductPage';

const Main = () => {
    const loadProducts = () => {
        const data = require('../assets/products.json');
        return data.products;
    }

    return (
        <>
        <Routes>
            <Route exact path='/' element={<Homepage /> }/>
            <Route exact path='/products' element={<Products productList={loadProducts()}/> } />
            <Route  path='/products/:id' element={<ProductPage productList={loadProducts()}/> }/>
            <Route  path='*' element={<Homepage /> }/>
        </Routes>
        </>
    );
}

export default Main;