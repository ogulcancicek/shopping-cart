import './shoppingcart.css';

const CartItemWrapper = ({product, increaseQuantity, decreaseQuantity, removeItemFromCart}) => {
    return (
        <div className="single-cart-item">
            <img src={product.img} alt={product.name} className="product-img"/>
            <div className='product-details'>
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price} USD</p>
            </div>
            <div className='options'>
                <div className='quantity-selector quantity'>
                    <input type='button' value='-' className='qtybutton minus' onClick={() => {
                                                                                              decreaseQuantity(product.id)      
                                                                                            }}/>
                    <input type='text' name='quantity' value={product['quantity']} className='qty' />
                    <input type='button' value='+' className='qtybutton plus' onClick={() => {
                                                                                              increaseQuantity(product.id)      
                                                                                            }}/>
                </div>
                <button className="delete-btn" onClick={() => {
                                                            removeItemFromCart(product)
                                                            }}>Delete</button>
            </div>
        </div>
    );
}

export default CartItemWrapper;