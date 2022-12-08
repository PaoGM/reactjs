import React from "react";
import '../App.css'

const BagWidget = () => {
    return (
        <div>
            <button className="bagButton">
                <i className="shoppingBag">
                    <img src={process.env.PUBLIC_URL + '/Imagenes/shopping-bag.gif'} alt="bag" />
                </i>
                <div className="bagCounter">0</div>
            </button>
        </div>
    );
}


export default BagWidget;
