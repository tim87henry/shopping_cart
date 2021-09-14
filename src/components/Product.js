import {Link} from "react-router-dom";
import ProductData from "../data/ProductData.js";

const Product = (props) => {
    let itemId = props.match;
    let itemAdded = false;
    let cartEmpty = (props.cartItems.length > 0)? false: true;
    for (let i=0; i<props.cartItems.length; i++) {
        if (props.cartItems[i].index === itemId) {
            itemAdded = true;
        }
    }

    return (
        <div className="productDetails">
            <img src={ProductData[itemId].image} alt="" height="300px"></img>
            <b>{ProductData[itemId].title}</b>
            <p>{ProductData[itemId].descr}</p>
            <p>${ProductData[itemId].price}</p>
            <Link to="/cart">
                <button onClick={() => {props.addItems(itemId)}} disabled={itemAdded}>Add to Cart</button>
                <button id="checkoutButton" disabled={cartEmpty}>Checkout</button>
            </Link>
        </div>
    )
}

export default Product;