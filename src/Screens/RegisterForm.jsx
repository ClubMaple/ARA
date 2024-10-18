import React, { useState } from "react";
import Styles from "./RegisterForm.module.css";

const municipiosAguascalientes = [
    "Aguascalientes",
    "Asientos",
    "Calvillo",
    "Cosío",
    "El Llano",
    "Pabellón de Arteaga",
    "Rincón de Romos",
    "San Francisco de los Romo",
    "San José de Gracia",
    "Tepezalá"
];

const tiposDiscapacidad = [
    "Visual",
    "Auditiva",
    "Motora",
    "Intelectual",
    "Psicosocial",
    "No tengo ninguna"
];

function RegisterForm() {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: '',
        edad: '',
        codigoPostal: '',
        direccion: '',
        numeroCasa: '',
        discapacidad: '',
        municipio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value // Este cambio asegura que el valor se actualice correctamente
        }));
    };

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
                        <label htmlFor="nombres">Nombre(s)</label>
                        <input
                            type="text"
                            name="nombres"
                            id="nombres"
                            maxLength="30"
                            value={formData.nombres}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={Styles.FormRow}>
                        <div className={Styles.FormField}>
                            <label htmlFor="apellidoPaterno">Apellido paterno</label>
                            <input
                                type="text"
                                name="apellidoPaterno"
                                id="apellidoPaterno"
                                maxLength="15"
                                value={formData.apellidoPaterno}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={Styles.FormField}>
                            <label htmlFor="apellidoMaterno">Apellido materno</label>
                            <input
                                type="text"
                                name="apellidoMaterno"
                                id="apellidoMaterno"
                                maxLength="15"
                                value={formData.apellidoMaterno}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={Styles.FormRow}>
                        <div className={`${Styles.FormField} ${Styles.FormFieldTelefono}`}>
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                type="tel"
                                name="telefono"
                                id="telefono"
                                maxLength="10"
                                value={formData.telefono}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^0-9]/g, ''); // Solo números
                                    if (value.length <= 10) {
                                        setFormData((prevData) => ({ ...prevData, telefono: value }));
                                    }
                                }}
                            />
                        </div>
                        <div className={`${Styles.FormField} ${Styles.FormFieldEdad}`}>
                            <label htmlFor="edad">Edad</label>
                            <input
                                type="number"
                                name="edad"
                                id="edad"
                                maxLength="3"
                                value={formData.edad}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^0-9]/g, ''); // Solo números
                                    if (value.length <= 3) {
                                        setFormData((prevData) => ({ ...prevData, edad: value }));
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className={Styles.FormField}>
                        <label htmlFor="municipio">Municipio</label>
                        <select
                            name="municipio"
                            id="municipio"
                            value={formData.municipio} // Asegúrate de que esto esté correctamente conectado
                            onChange={handleChange}
                        >
                            <option value="">Seleccione un municipio</option>
                            {municipiosAguascalientes.map((municipio, index) => (
                                <option key={index} value={municipio}>{municipio}</option>
                            ))}
                        </select>
                    </div>
                    <div className={Styles.FormRow}>
                        <div className={Styles.FormField}>
                            <label htmlFor="codigoPostal">Código Postal</label>
                            <input
                                type="text"
                                name="codigoPostal"
                                id="codigoPostal"
                                maxLength="5"
                                value={formData.codigoPostal}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^0-9]/g, ''); // Solo números
                                    if (value.length <= 5) {
                                        setFormData((prevData) => ({ ...prevData, codigoPostal: value }));
                                    }
                                }}
                            />
                        </div>
                        <div className={Styles.FormField}>
                            <label htmlFor="numeroCasa">Número de Casa</label>
                            <input
                                type="text"
                                name="numeroCasa"
                                id="numeroCasa"
                                maxLength="10"
                                value={formData.numeroCasa}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={Styles.FormField}>
                        <label htmlFor="direccion">Dirección</label>
                        <input
                            type="text"
                            name="direccion"
                            id="direccion"
                            maxLength="100"
                            value={formData.direccion}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={Styles.FormField}>
                        <label htmlFor="discapacidad">Discapacidad</label>
                        <select
                            name="discapacidad"
                            id="discapacidad"
                            value={formData.discapacidad} // Asegúrate de que esto esté correctamente conectado
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una opción</option>
                            {tiposDiscapacidad.map((tipo, index) => (
                                <option key={index} value={tipo}>{tipo}</option>
                            ))}
                        </select>
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
