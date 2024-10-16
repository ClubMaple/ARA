import React from "react";
import Styles from "./Settings.module.css";
import { Link } from "react-router-dom";


function Settings () {
    return (
        /* Aqui va un contenedor -> texto de bienvenida, Explicación de la app -> Boton de Registro, Boton de Ingresar */
        <div className={Styles.container}>
            <div className={Styles.container}>
                <h1 style={{color:"black"}}>Aqui iria el Menu de configuración, si nos hubieran dado más tiempo!! 🙄🙄🙄😑😐😐</h1>
            </div>
            <Link to="/home" style={{color: "black"}}>Volver</Link>
        </div>
    )
}

export default Settings;