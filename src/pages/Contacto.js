import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
const Contacto = () => {
    return (
        <div className="contacto">
            <div className="follow">
                <FavoriteIcon />
                <h1>Seguinos en Nuestras Redes</h1>
                <FavoriteIcon />
            </div>
            <div className="social">
                <div>
                    <a href="https://www.facebook.com/sorella.rdf"><img src={process.env.PUBLIC_URL + '/Imagenes/facebook.png'} className="redes" alt="Facebook Logo" /></a>
                    <h1 className="facebookName">Sorella</h1>
                </div>
                <div>
                    <a href="https://www.instagram.com/sorella.rdf"><img src={process.env.PUBLIC_URL + '/Imagenes/instagram.png'} className="redes" alt="Instagram Logo" /></a>
                    <h1 className="instaName">@sorella.rdf</h1>
                </div>
            </div>
        </div>
    )
}

export default Contacto;