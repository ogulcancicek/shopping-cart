const ProductWrapper = ({name, price, img}) => {
    return (
        <div className="product-container">
            <img src={img} alt={name} className="product-img" />
            <p className="product-name">{name}</p>
            <p className="product-price">{price} USD</p>
        </div>
    );
}

export default ProductWrapper;