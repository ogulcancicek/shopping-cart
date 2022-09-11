import { BrowserRouter, Link } from "react-router-dom";
import '../index.css';

const Navbar = () => {
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
                        <Link to={''}  className="nav-item">
                            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                        </Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;