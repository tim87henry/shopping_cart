import ProductData from "../data/ProductData.js";
import Cards from "./Cards.js";
import {Link} from "react-router-dom";

const Shop = () => {
    let productCards = [];
    ProductData.map(club => {
        productCards.push(
            <Link to="/shop/adasdsa">
                <Cards item={club}/>
            </Link>
        )
    })
    return (
        <div className="shop">
            Shop your favourite products here
            <div className="listOfProducts">
                {productCards}
            </div>
        </div>
    )
}

export default Shop;