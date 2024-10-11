import React from "react";
import Styles from "./SOSButton.module.css";

const SOSButton = () => {
    return (
        <div className={Styles.container}>
            <button type="button" className={Styles.SOSButton}>S.O.S</button>
        </div>
    )
}

export default SOSButton;