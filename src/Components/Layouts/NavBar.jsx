import React from "react";
import Styles from "./NavBar.module.css";

const Navbar = () => {
    return(
        <div className={Styles.navbar}>
            <div className={Styles.navbar__links}>
                <a href="#" className={Styles.navbar__link}>Home</a>
                <a href="#" className={Styles.navbar__link}>FakeCall</a>
                <a href="#" className={Styles.navbar__link}>Settings</a>
            </div>
        </div>
    )

}

export default Navbar;