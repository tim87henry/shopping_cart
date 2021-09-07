import ProductData from "../data/ProductData.js";
import Cards from "./Cards.js";
import React from "react-router-dom";

const Shop = () => {
    return (
        <div className="shop">
            Shop your favourite products here
            <div className="listOfProducts">
                {/* {ProductData.forEach((team) => {
                    <Cards item={team} />
                })} */}
                <Cards item={ProductData[0]} />
            </div>
        </div>
    )
}

export default Shop;