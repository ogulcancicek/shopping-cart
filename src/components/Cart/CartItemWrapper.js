import './shoppingcart.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../state/actions/cart';

const CartItemWrapper = ({product}) => {
    const dispatch = useDispatch();

    return (
        <div className="single-cart-item">
            <Link to={`/shopping-cart/products/${product.id}`}>
                <img src={product.img} alt={product.name} className="product-img"/>
            </Link>
            <div className='product-details'>
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price} USD</p>
            </div>
            <div className='options'>
                <div className='quantity-selector quantity'>
                    <input type='button' value='-' className='qtybutton minus' onClick={() => dispatch(decreaseQuantity(product.id))}/>
                    <input type='text' name='quantity' value={product['quantity']} className='qty' disabled/>
                    <input type='button' value='+' className='qtybutton plus' onClick={() => dispatch(increaseQuantity(product.id))}/>
                </div>
                <button className="delete-btn" onClick={() => dispatch(removeFromCart(product))}>Delete</button>
            </div>
        </div>
    );
}

export default CartItemWrapper;