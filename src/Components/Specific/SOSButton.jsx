import React, { useState, useRef } from "react";
import Styles from "./SOSButton.module.css";

const SOSButton = () => {
    const [showButtons, setShowButtons] = useState(false);
    const timeRef = useRef(null);
    const buttonRef = useRef(null);

    const handleSOSPressStart = () => {
        timeRef.current = setTimeout(() => {
            setShowButtons(true);
        }, 2000);
    };

    const handleSOSPressEnd = () => {
        clearTimeout(timeRef.current);
    };

    const functionalityTest = async () => {
        alert('Prueba de funcionalidad');
    };

    return (
        <div className={Styles.container}>
            <button
                type="button"
                ref={buttonRef}
                className={Styles.SOSButton}
                onMouseDown={handleSOSPressStart}
                onMouseUp={handleSOSPressEnd}
                onMouseLeave={handleSOSPressEnd}
                onTouchStart={handleSOSPressStart}
                onTouchEnd={handleSOSPressEnd}
            >
                S.O.S
            </button>

            {showButtons && (
                <>
                    <button 
                        className={`${Styles.buttonPosition} ${Styles.leftButton}`} 
                        onClick={functionalityTest}
                    >
                        Botón 1
                    </button>
                    <button 
                        className={`${Styles.buttonPosition} ${Styles.centerButton}`}
                        onClick={functionalityTest}
                    >
                        Botón 2
                    </button>
                    <button 
                        className={`${Styles.buttonPosition} ${Styles.rightButton}`}
                        onClick={functionalityTest}
                    >
                        Botón 3
                    </button>
                </>
            )}
        </div>
    );
};

export default SOSButton;
