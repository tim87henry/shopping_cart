import ProductData from "../data/ProductData.js";
import Cards from "./Cards.js";
import {Link} from "react-router-dom";
import "../styles/style.css";

const Shop = () => {
    let productCards = [];
    ProductData.map(club => {
        productCards.push(
            <Link to={`/shop/${club.id}`}>
                <Cards item={club} className="cards"/>
            </Link>
        )
    })
    return (
        <div className="shop">
            <div className="listOfProducts">
                {productCards}
            </div>
        </div>
    )
}

export default Shop;