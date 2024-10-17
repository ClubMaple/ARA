import React from "react";
import Styles from "./LogIn.module.css";
import { Link } from "react-router-dom";

const handleSubmit = (e) => {
    e.preventDefault();
}


function LogIn () {
    return (
        <div className={Styles.container}>
            <form className={Styles.logInForm} onSubmit={handleSubmit}>
                <label className={Styles.logInLabel}>Usuario:</label>
                <input type="text" name="username" className={Styles.logInField}/>
                <br/>
                <label className={Styles.logInLabel}>Contraseña:</label>
                <input type="password" name="password" className={Styles.logInField}/>
                <br/>
                <button type="submit" className={Styles.logInButton}><Link to="/home">Ingresar</Link></button>
            </form>
        </div>
    )
}

export default LogIn;