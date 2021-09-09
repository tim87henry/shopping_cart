import React from "react-router-dom";

const Cards = (props) => {
    return (
        <div className="cardsSection">
            <img src={props.item.image} alt="" height="300px"></img>
            {props.item.title}
        </div>
    )
}

export default Cards;