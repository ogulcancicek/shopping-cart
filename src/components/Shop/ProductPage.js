import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state/actions/cart';
import './shop.css';

const ProductPage = ({productList}) => {
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    const id = Number(useParams().id);
    useEffect( () => {
        setProduct(findItem(id));
    },[])

    const findItem = (id) => productList.find((product) => product.id === id);
    return (
        <div className="s-product-container">
                <img src={'.' + product.img} alt={product.name} className="s-product-img"/>
            <div className='info-option-container'>
                <div className='infos'>
                    <h4 className='s-product-name'>{product.name}</h4>
                    <p className='s-product-price'>{product.price} USD</p>
                </div>
                <div className='options'>
                    <button className='order-button' onClick={() => dispatch(addToCart(product))}>Add to Cart!</button>
                    <Link to={'/shopping-cart/products'}>
                        <button className='back-button'>
                            <i className="fa-solid fa-arrow-left"></i> Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default ProductPage;