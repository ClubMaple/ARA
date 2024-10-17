import React from "react";
import Styles from "./Settings.module.css";
import { Link } from "react-router-dom";


function Settings () {
    return (
        <div className={Styles.container}>
            <div className={Styles.botonSalir}><h3><Link to="/home">X</Link></h3></div>
            <h1 className={Styles.titleSettings}>Settings</h1>
            <ul className={Styles.lista}>
                <li><Link to="/settings/account">Cuenta</Link></li>
                <li><Link to="/settings/notifications">Notificaciones</Link></li>
                <li><Link to="/settings/privacy">Privacidad</Link></li>
                <li><Link to="/">Cerrar sesión</Link></li>
            </ul>
        </div>
    )
}

export default Settings;