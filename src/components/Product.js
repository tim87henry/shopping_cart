import {Link} from "react-router-dom";
import ProductData from "../data/ProductData.js";

const Product = (props) => {
    let itemId = props.match - 1;
    //console.log("It's "+props.addItem)
    return (
        <div className="productDetails">
            <img src={ProductData[itemId].image} alt="" height="300px"></img>
            {ProductData[itemId].descr}
            <Link to="/cart">
                <button onClick={props.addItems(itemId,1)}>Add to Cart</button>
            </Link>
        </div>
    )
}

export default Product;