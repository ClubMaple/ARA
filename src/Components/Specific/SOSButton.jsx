import React, {useState, useRef} from "react";
import Styles from "./SOSButton.module.css";

const SOSButton = () => {
    const [showButtons, setShowButtons] = useState(false); //state de los botones
    const timeRef = useRef(null); // tiempo
    const buttonRef = useRef(null);
    
    const handleSOSMauseDown = () => {
        timeRef.current = setTimeout(() => {
            setShowButtons(true);
        }, 3000);
    }
    const handleSOSMauseUp = () => {
        clearTimeout(timeRef.current);
    }
    return (
        <div className={Styles.container}>
            <button 
                type="button" 
                ref={buttonRef}
                className={Styles.SOSButton}
                onMouseDown={handleSOSMauseDown}
                onMouseUp={handleSOSMauseUp}
                onMouseLeave={handleSOSMauseUp}
                >
                S.O.S
            </button>

            {showButtons && (
                <>
                    <button className={`${Styles.aditionalButton} ${Styles.leftButton}`}>
                        Botón 1
                    </button>
                    <button className={`${Styles.aditionalButton} ${Styles.centerButton}`}>
                        Botón 2
                    </button>
                    <button className={`${Styles.aditionalButton} ${Styles.rightButton}`}>
                        Botón 3
                    </button>
                </>
            )}

        </div>
    )
}

export default SOSButton;