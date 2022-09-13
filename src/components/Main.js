import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Products from './Shop/Products';
import ProductPage from './Shop/ProductPage';
import ShoppingCart from './Cart/ShoppingCart';

const Main = ({cartItems, addToCart, removeItemFromCart, increaseQuantity, decreaseQuantity, calculateTotal}) => {
    const loadProducts = () => {
        const data = require('../assets/products.json');
        return data.products;
    }

    return (
        <>
        <Routes>
            <Route exact path='/' element={<Homepage /> }/>
            <Route exact path='/products' element={<Products productList={loadProducts()}/> } />
            <Route  path='/products/:id' element={<ProductPage 
                                                        productList={loadProducts()} 
                                                        addToCart={addToCart}/> }/>
            <Route  path='/cart' element={<ShoppingCart
                                                        cartItems={cartItems}
                                                        removeItemFromCart={removeItemFromCart}
                                                        increaseQuantity={increaseQuantity}
                                                        decreaseQuantity={decreaseQuantity}
                                                        calculateTotal={calculateTotal}
                                                    /> }/>
            <Route  path='*' element={<Homepage /> }/>
        </Routes>
        </>
    );
}

export default Main;