import React from "react-router-dom";

const Cards = (props) => {
    return (
        <div className="cards">
            {props.item.descr}
        </div>
    )
}

export default Cards;