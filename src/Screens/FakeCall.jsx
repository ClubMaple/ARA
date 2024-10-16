import React from "react";
import Styles from "./FakeCall.module.css";
import { Link } from "react-router-dom";


function FakeCall () {
    return (
        <div className={Styles.container}>
            <h1 style={{color:"black"}}>Aqui iria el fake Call, si mi equipo hubiese hecho alguno!!</h1>
            <Link to="/home" style={{color: "black"}}>Volver</Link>
            
        </div>
    )
}

export default FakeCall;