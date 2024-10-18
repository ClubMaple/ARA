import React from "react";
import { Link } from "react-router-dom";
import Styles from "./RegisterFormReferenteUno.module.css";

const RegisterFormReferenteUno = () => {
    return (
        <div className={Styles.container}>
            <h2>Registro Referente Uno</h2>
            {/* Aquí puedes agregar tu formulario o contenido */}
            <Link to="/otra-ruta">Ir a otra ruta</Link>
        </div>
    );
};

export default RegisterFormReferenteUno;
