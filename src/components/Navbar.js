import { Link } from "react-router-dom";
import '../index.css';

const Navbar = ({itemCounter}) => {
    return (
        <nav>
                <Link to={""}  className="nav-item">
                    <h1 className="text-logo">Fashion Cats</h1>
                </Link>

                <ul className="nav-items">
                    <li>
                        <Link to={'products'} className="nav-item">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/cart'}  className="nav-item">
                            <div className="cart-item">
                                <div className="item-counter">
                                    <h4>{(itemCounter) ? itemCounter : 0}</h4>
                                </div>
                                <i className="fa-sharp fa-solid fa-cart-shopping"></i>                                
                            </div>
                        </Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;