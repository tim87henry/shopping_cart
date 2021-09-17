import {Link} from "react-router-dom";
import "../styles/style.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <h3 className="navbarHeader">The Jersey Store</h3>
            <ul className="navbarList">
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;