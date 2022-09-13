import { Link } from "react-router-dom";

const ProductWrapper = ({name, price, img, dataKey}) => {
    return (
        <div className="product-container">
            <Link to={`/shopping-cart/products/${dataKey}`}>
                <img src={img} alt={name} className="product-img" />
            </Link>
            <Link to={`/shopping-cart/products/${dataKey}`}>
                <p className="product-name">{name}</p>
            </Link>
            <p className="product-price">{price} USD</p>
        </div>
    );
}

export default ProductWrapper;