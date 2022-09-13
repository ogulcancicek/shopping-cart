import './shoppingcart.css';
import CartItemWrapper from './CartItemWrapper';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity, calculateTotal}) => {
    const navigate = useNavigate();
    return (
        <div className='container shopping-cart-container'>
                <h4 className='cart-title'>My Cart</h4>
                <div className="sub-container">
                    <div className="cart-item-container">
                        {Object.values(cartItems).map( (cartItem) => (
                            <CartItemWrapper key={cartItem.id} 
                                             product={cartItem}
                                             increaseQuantity={increaseQuantity}
                                             decreaseQuantity={decreaseQuantity}
                                             removeItemFromCart={removeItemFromCart}
                                            />
                        ))}
                    </div>
                    <div className='cart-info-container'>
                        <button onClick={() => navigate(-1)} className="back-button" id="cart-back-button">
                            <i className="fa-solid fa-arrow-left"></i> Go Back
                        </button>
                        <div className="total-quantity-container">
                            <p className='total-quantity'>Total {calculateTotal()} USD</p>    
                        </div>
                        <button className="checkout-button">Checkout</button>
                    </div>
                </div>
        </div>
    );
}

export default ShoppingCart;