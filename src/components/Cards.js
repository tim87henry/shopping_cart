import React from "react-router-dom";
import "../styles/style.css";

const Cards = (props) => {
    return (
        <div className="cardsSection">
            <img src={props.item.image} alt="" height="300px"></img>
            <p className="cardTitle">
                {props.item.title}
            </p>
            <p className="cardPrice">
                ${props.item.price}
            </p>
        </div>
    )
}

export default Cards;