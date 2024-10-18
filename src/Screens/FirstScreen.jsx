import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./FirstScreen.module.css";

function FirstScreen() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNextClick = () => {
        setLoading(true);
        // Simular un retraso para la carga
        setTimeout(() => {
            navigate("/privacitynotice");
        }, 2000); // 2 segundos de carga
    };

    return (
        <div className={Styles.container}>
            <div className={`${Styles.bienvenida} ${Styles.fadeIn}`}>
                <h1>¡Bienvenida a la App!</h1>
                <img src="/ARA.png" alt="Logo" className={Styles.fadeIn} />
            </div>
            {loading ? (
                <div className={Styles.loaderContainer}>
                    <div className={Styles.loader}>
                        <div className={Styles.spinner}></div>
                        <p>Cargando...</p>
                    </div>
                </div>
            ) : (
                <div className={Styles.botones}>
                    <button className={Styles.fadeIn} onClick={handleNextClick}>
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
}

export default FirstScreen;
