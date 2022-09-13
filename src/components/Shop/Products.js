import { useEffect, useState } from 'react';
import ProductWrapper from './ProductWrapper';
import './shop.css';

const Products = ({productList}) => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        setProducts(productList);
    },[])

    return (
        <div className="container products-page-container">
            {products.map( (product) => (
                <ProductWrapper 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.img}
                    dataKey={product.id} 
                />
            ))}
        </div>
    );
}

export default Products;