import React from "react";
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";

const Navbar = () => {
    return(
        <div className={Styles.navbar}>
            <ul className={Styles.navbar__links}>
                <li className={Styles.navbar__link}><Link to="/home">Home</Link></li>
                <li className={Styles.navbar__link}><Link to="/fakeCall">FakeCall</Link></li>
                <li className={Styles.navbar__link}><Link to="/settings">Configuraciones</Link></li>
                
            </ul>
        </div>
    )

}

export default Navbar;