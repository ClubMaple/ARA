import React from "react";
import Styles from "./RegisterForm.module.css";

function RegisterForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Hi');
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <h1>Registro</h1>
                    <div className={Styles.FormField}>
                        <label>Nombre(s)</label>
                        <input type="text" name="nombre" />
                    </div>
                    <div className={Styles.FormRow}>
                        <div className={Styles.FormField}>
                            <label>Apellido paterno</label>
                            <input type="text" name="apellidoPaterno" />
                        </div>
                        <div className={Styles.FormField}>
                            <label>Apellido materno</label>
                            <input type="text" name="apellidoMaterno" />
                        </div>
                    </div>
                    <div className={Styles.FormRow}>
                        <div className={`${Styles.FormField} ${Styles.FormFieldTelefono}`}>
                            <label>Teléfono</label>
                            <input
                                type="number"
                                name="telefono"
                                maxLength="10"
                                onInput={(e) => {
                                    if (e.target.value.length > 10) {
                                        e.target.value = e.target.value.slice(0, 10);
                                    }
                                }}
                                onKeyDown={(e) => e.key === 'e' && e.preventDefault()}
                                
                            />
                        </div>
                        <div className={`${Styles.FormField} ${Styles.FormFieldEdad}`}>
                            <label>Edad</label>
                            <input
                                type="number"
                                name="edad"
                                maxLength="3"
                                onInput={(e) => {
                                    if (e.target.value.length > 3) {
                                        e.target.value = e.target.value.slice(0, 3);
                                    }
                                }}
                                onKeyDown={(e) => e.key === 'e' && e.preventDefault()}
                            />
                        </div>
                    </div>
                    <div className={Styles.FormField}>
                        <label>Nombre de Usuario</label>
                        <input type="text" name="username" />
                    </div>
                    <div className={Styles.FormField}>
                        <label>Contraseña</label>
                        <input type="password" name="password" />
                    </div>
                    <div className={Styles.FormField}>
                        <label>Sexo</label>
                        <div className={Styles.RadioGroup}>
                            <label>
                                <input type="radio" name="sexo" value="masculino" />
                                Masculino
                            </label>
                            <label>
                                <input type="radio" name="sexo" value="femenino" />
                                Femenino
                            </label>
                            <label>
                                <input type="radio" name="sexo" value="nobinario" />
                                No binario
                            </label>
                        </div>
                    </div>
                    <div className={Styles.botones}>
                        <button type="submit">Siguiente</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
