import React from "react";

const Logo = () => {
    return (
        <div className="logo">
            <img src={process.env.PUBLIC_URL + '/Imagenes/sorella-logo.gif'} alt="logo" />
        </div>
    );
} 

export default Logo;