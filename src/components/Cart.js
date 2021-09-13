import React from "react-router-dom";
import ProductData from "../data/ProductData.js";
import {Link} from "react-router-dom";

const Cart = (props) => {
    let cartItems = [];
    let totalCost= 0;
    let checkoutButton=[];

    props.cartItems.map(item => {
        cartItems.push(<div>
            <h4>{ProductData[item["index"]].title}</h4>
            <img src={ProductData[item["index"]].image} width="100px" height="100px"></img>
            <span>
                Quantity : 
                <button onClick={() => {props.changeQuantity(item["index"],"subtract")}}>-</button>
                {item["quantity"]}
                <button onClick={() => {props.changeQuantity(item["index"],"add")}}>+</button>
            </span>
            </div>);
    });

    props.cartItems.map(item => {
        totalCost += parseFloat(ProductData[item["index"]].price) * parseInt(item.quantity);
    });
    totalCost = totalCost.toFixed(2);

    checkoutButton.push(<div>
        <Link to="/checkout">
            <button onClick={() => {props.emptyCart()}}>Checkout</button>
        </Link>
    </div>)

    return (
        <div className="cart">
            Shopping cart displayed here. {cartItems}
            <div>
                Total cost is {totalCost}
                {checkoutButton}
            </div>
        </div>
    )
}

export default Cart;