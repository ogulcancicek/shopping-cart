import './shoppingcart.css';
import CartItemWrapper from './CartItemWrapper';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state);
    const navigate = useNavigate();

    const calculateTotal = () => {
        const cartItemValues = Object.values(cartItems);
            let total = 0;
            for(let i = 0; i < cartItemValues.length; i++) {
                total += (cartItemValues[i]['quantity'] * cartItemValues[i]['price'])
            }
            return total.toFixed(2);
    }

    return (
        <div className='container shopping-cart-container'>
                <h4 className='cart-title'>My Cart</h4>
                <div className="sub-container">
                    <div className="cart-item-container">
                        {Object.values(cartItems).map( (cartItem) => (
                            <CartItemWrapper key={cartItem.id}
                                             product={cartItem}
                                             />
                        ))}
                    </div>
                    <div className='cart-info-container'>
                        <button onClick={() => navigate(-1)} className="back-button" id="cart-back-button">
                            <i className="fa-solid fa-arrow-left"></i> Go Back
                        </button>
                        <div className="total-quantity-container">
                            <p className='total-quantity'>Total {calculateTotal(cartItems)} USD</p>    
                        </div>
                        <button className="checkout-button">Checkout</button>
                    </div>
                </div>
        </div>
    );
}

export default ShoppingCart;