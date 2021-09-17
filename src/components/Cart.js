import React from "react-router-dom";
import ProductData from "../data/ProductData.js";
import {Link} from "react-router-dom";
import "../styles/style.css";

const Cart = (props) => {
    let cartItems = [];
    let totalCost= 0;
    let checkoutButton=[];
    let header="";
    let costLine="";

    props.cartItems.map(item => {
        cartItems.push(
            <div className="cartItem">
            <h4 className="cartTitle">{ProductData[item["index"]].title}</h4>
            <img src={ProductData[item["index"]].image} className="cartImage"></img>
            <span>
                Quantity : 
                <button onClick={() => {props.changeQuantity(item["index"],"subtract")}} className="qtyButton">-</button>
                {item["quantity"]}
                <button onClick={() => {props.changeQuantity(item["index"],"add")}} className="qtyButton">+</button>
            </span>
            </div>);
    });

    props.cartItems.map(item => {
        totalCost += parseFloat(ProductData[item["index"]].price) * parseInt(item.quantity);
    });
    totalCost = totalCost.toFixed(2);

    if (cartItems.length > 0) {
        checkoutButton.push(<div>
            <Link to="/checkout">
                <button onClick={() => {props.emptyCart()}} className="button">Checkout</button>
            </Link>
        </div>)
        header = "Your Shopping Cart";
        costLine = "Total cost is "+totalCost;
    } else {
        header = "Shopping cart is empty";
    }

    return (
        <div className="cart">
            <div>
                <p className="cartHeader">{header}</p>
                {cartItems}
                <p className="cartCost">{costLine}</p>
                {checkoutButton}
            </div>
        </div>
    )
}

export default Cart;