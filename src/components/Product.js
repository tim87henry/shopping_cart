import {Link} from "react-router-dom";
import { useState } from "react";
import ProductData from "../data/ProductData.js";

const Product = (props) => {
    let itemId = props.match - 1;
    //const [quantity, setQuantity] = useState(1);
    return (
        <div className="productDetails">
            <img src={ProductData[itemId].image} alt="" height="300px"></img>
            {ProductData[itemId].descr}
            {/* <label for="quantity">Qty :</label>
            <input type="number" id="quantity" name="quantity" step="1" onChange={event => setQuantity(event.target.value)}/> */}
            <Link to="/cart">
                <button onClick={() => {props.addItems(itemId,1);let tester="1"}}>Add to Cart</button>
                <button id="checkoutButton">Checkout</button>
            </Link>
        </div>
    )
}

export default Product;