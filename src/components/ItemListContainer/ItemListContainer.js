import React from "react";
import "./ItemListContainer.css"

function ItemListContainer (props) {
    return (
        <div className="title">
            <p>♡</p>
            <h1> {props.title} </h1>
            <p>♡</p>
        </div>
    );
}
export default ItemListContainer;