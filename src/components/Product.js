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
            <img src={ProductData[itemId].image} alt="" className="productImage"></img>
            <div className="productInfo">
                <b className="productTitle">{ProductData[itemId].title}</b>
                <p className="productDesc">{ProductData[itemId].descr}</p>
                <p className="productPrice">${ProductData[itemId].price}</p>
                <Link to="/cart">
                    <button onClick={() => {props.addItems(itemId)}} disabled={itemAdded} className="button">Add to Cart</button>
                    <button id="checkoutButton" disabled={cartEmpty}  className="button">Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default Product;