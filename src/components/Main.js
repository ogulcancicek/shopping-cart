import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Products from './Shop/Products';
import ProductPage from './Shop/ProductPage';
import ShoppingCart from './Cart/ShoppingCart';

const Main = () => {
    const loadProducts = () => {
        const data = require('../assets/products.json');
        return data.products;
    }

    return (
        <Routes>
            <Route exact path='/shopping-cart' element={<Homepage /> }/>
            <Route exact path='/shopping-cart/products' element={<Products productList={loadProducts()}/> } />
            <Route  path='/shopping-cart/products/:id' element={<ProductPage productList={loadProducts()} /> }/>
            <Route  path='/shopping-cart/cart' element={<ShoppingCart /> }/>
            <Route  path='*' element={<Homepage /> }/>
        </Routes>
    );
}

export default Main;