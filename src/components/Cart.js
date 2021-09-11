import React from "react-router-dom";
import ProductData from "../data/ProductData.js";

const Cart = (props) => {
    let cartItems = [];
    props.cartItems.map(item => {
        cartItems.push(<div>
            <h4>{ProductData[item[0]].title}</h4>
            <img src={ProductData[item[0]].image} width="100px" height="100px"></img>
            <span>Quantity : {item[1]}</span>
            </div>);
    });
    return (
        <div className="cart">
            Shopping cart displayed here. {cartItems}
        </div>
    )
}

export default Cart;