import React from "react";
import Styles from "./RegisterForm.module.css";

function RegisterForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Hi');
    }

    return (
        /* Aqui va el formulario de registro */
        <div className={Styles.container}>
            <div className={Styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <h1>Registro</h1>
                    <div className={Styles.FormField}>
                        <label>Nombre(s)</label>
                        <input
                            type="text"
                            name="PlaceHolder"
                        />
                    </div>
                    <div className={Styles.FormRow}>
                        <div className={Styles.FormField}>
                            <label>Apellido paterno</label>
                            <input
                                type="text"
                                name="apellidoPaterno"
                            />
                        </div>
                        <div className={Styles.FormField}>
                            <label>Apellido materno</label>
                            <input
                                type="text"
                                name="apellidoMaterno"
                            />
                        </div>
                    </div>
                    <div className={Styles.FormRow}>
                        <div className={`${Styles.FormField} ${Styles.FormFieldTelefono}`}>
                            <label>Teléfono</label>
                            <input
                                type="number"
                                name="telefono"
                            />
                        </div>
                        <div className={`${Styles.FormField} ${Styles.FormFieldEdad}`}>
                            <label>Edad</label>
                            <input
                                type="number"
                                name="edad"
                            />
                        </div>
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
                        <button type="submit">Siguiente</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default RegisterForm;