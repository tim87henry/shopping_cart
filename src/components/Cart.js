import React from "react-router-dom";
import ProductData from "../data/ProductData.js";

const Cart = (props) => {
    console.log("HEEE  "+props.cartItems[0][0])
    return (
        <div className="cart">
            Shopping cart displayed here. {ProductData[props.cartItems[0][0]].title}
        </div>
    )
}

export default Cart;