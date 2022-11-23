import React from "react";
import bag from '../Imagenes/shopping-bag.gif'
import './BagWidget.css' 

const BagWidget = () => {
    return (
        <div>
            <button className="bagButton">
                <i className="shoppingBag">
                    <img src={(bag)} alt="bag" />
                </i>
                <div className="bagCounter">0</div>
            </button>
        </div>
    );
}


export default BagWidget;
