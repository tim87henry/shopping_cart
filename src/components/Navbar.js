import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="home">
            <ul>
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