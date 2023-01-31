import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";


const Footer = () => {

    return(
        <div className="footer">
            <div className="icons">
                <a href="https://www.facebook.com/sorella/"><Facebook style= {{fill: "#EE4FA4"}}/></a>
                <a href="https://www.instagram.com/sorella.rdf/"><Instagram style= {{fill: "#EE4FA4"}}/></a>
                <a href="https://www.linkedin.com/in/npgm91/"><LinkedIn style= {{fill: "#EE4FA4"}}/></a>
                <a href="https://github.com/PaoGM/reactjs"><GitHub style= {{fill: "#EE4FA4"}}/></a>
            </div>

            <div className="textContent">
                <p>Info</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p> &copy; 2023 - Gonzalez Malica, Noelia Paola</p>
            </div>
        </div>
    )
}

export default Footer