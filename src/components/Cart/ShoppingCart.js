import './shoppingcart.css';
import CartItemWrapper from './CartItemWrapper';

const ShoppingCart = ({cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity}) => {
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

                    </div>
                </div>
        </div>
    );
}

export default ShoppingCart;