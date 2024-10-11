import React from "react";
import Styles from "./RegisterForm.module.css";

function RegisterForm () {

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert('Hi');
    }

    return (
        /* Aqui va el formulario de registro */
        <div className={Styles.container}>
            
            <h1>Registro</h1>

            <div className={Styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.FormField}>
                        <label>Nombre</label>
                        <input
                            type="text" 
                            name="PlaceHolder"
                        />
                    </div>
                    <div className={Styles.FormField}>
                        <label>Nombre</label>
                        <input
                            type="text" 
                            name="PlaceHolder"
                        />
                    </div>
                    <div className={Styles.FormField}>
                        <label>Nombre</label>
                        <input
                            type="text" 
                            name="PlaceHolder"
                        />
                    </div>
                    <div className={Styles.FormField}>
                        <label>Nombre</label>
                        <input
                            type="text" 
                            name="PlaceHolder"
                        />
                    </div>
                    <div className={Styles.FormField}>
                        <label>Nombre</label>
                        <input
                            type="text" 
                            name="PlaceHolder"
                        />
                    </div>
                    <div className={Styles.FormField}>
                        <label>Nombre</label>
                        <input
                            type="text" 
                            name="PlaceHolder"
                        />
                    </div>
                    <div className={Styles.FormField}>
                        <label>Nombre</label>
                        <input
                            type="text" 
                            name="PlaceHolder"
                        />
                    </div>
                    <div className={Styles.FormField}>
                        <label>Nombre</label>
                        <input
                            type="text" 
                            name="PlaceHolder"
                        />
                    </div>
                    <div className={Styles.botones}>
                        <button type="submit">Enviar</button>
                    </div>
                </form>

            </div>
            
        </div>
    )
}

export default RegisterForm;