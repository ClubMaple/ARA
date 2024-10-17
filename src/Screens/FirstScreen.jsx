import React from "react";
import { Link } from "react-router-dom";
import Styles from "./FirstScreen.module.css";


function FirstScreen () {
    return (
        /* Aqui va un contenedor -> texto de bienvenida, Explicación de la app -> Boton de Registro, Boton de Ingresar */
        <div className={Styles.container}>
            <div className={Styles.bienvenida}>
                <h1>Bienvenido a la App</h1>
                <img src="/ARA.png" alt="" />
            </div>
            <div className={Styles.botones}>
                <button><Link to="/register">Registro</Link></button>
                <button><Link to="/home">Ingresar</Link></button>
            </div>
            
        </div>
    )
}

export default FirstScreen;