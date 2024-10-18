import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Reemplaza useHistory con useNavigate
import Styles from "./PrivacityNotice.module.css";

const PrivacityNotice = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();  // Reemplaza history con navigate

    const handleTermsChange = (e) => {
        setTermsAccepted(e.target.checked);
    };

    const handleContinue = () => {
        if (termsAccepted) {
            navigate("/register");  // Redirige a la otra pantalla
        }
    };

    return (
        <div className={Styles.privacityNotice}>
            <h2>Aviso de Privacidad</h2>
            <p style={{ textAlign: "justify" }}> 
Ayuda Rápida Aguascalientes (ARA) reconoce la importancia de la privacidad y la protección de los datos personales de sus usuarias. Este aviso de privacidad tiene como objetivo informarle sobre el uso y tratamiento de los datos personales que recabamos para ofrecerle un servicio eficiente y personalizado en situaciones de emergencia.

</p> <p style={{ textAlign: "justify" }}> Finalidad del tratamiento de los datos:
Los datos personales que recopilamos son necesarios para proporcionar asistencia oportuna y personalizada en situaciones de emergencia. Las finalidades del tratamiento de sus datos incluyen, pero no se limitan a:

</p> <ul style={{ textAlign: "justify" }}> <li>Identificación personal: Recopilamos nombre, edad, sexo y otros datos personales para identificar a la usuaria y facilitar su ubicación en situaciones críticas.</li> <li>Contacto inmediato: Utilizamos números de teléfono para establecer contacto con la usuaria, sus contactos de emergencia o las autoridades competentes.</li> <li>Geolocalización en tiempo real: Con su permiso, utilizamos su ubicación en tiempo real para enviar ayuda rápidamente a su posición exacta.</li> <li>Historial de incidentes: Mantenemos un registro de las solicitudes de ayuda para mejorar nuestros servicios y realizar análisis de seguridad y patrones de riesgo.</li> <li>Información de salud: En caso de ser proporcionada, la información médica relevante será utilizada para garantizar un tratamiento adecuado en situaciones críticas.</li> </ul> <p style={{ textAlign: "justify" }}> Datos personales recabados:
Para cumplir con las finalidades mencionadas, podremos recabar los siguientes datos personales:

</p> <ul style={{ textAlign: "justify" }}> <li>Datos de identificación: Nombre(s), apellidos, edad.</li> <li>Datos de contacto: Número de teléfono.</li> <li>Datos de ubicación: Dirección y geolocalización en tiempo real (si la usuaria lo autoriza).</li> <li>Datos sensibles: Información médica relevante, como alergias o condiciones de salud.</li> </ul> <p style={{ textAlign: "justify" }}> Compartición de datos personales:
Sus datos podrán ser compartidos con las siguientes entidades, siempre garantizando su confidencialidad y protección:

</p> <ul style={{ textAlign: "justify" }}> <li>Autoridades competentes: En situaciones que requieran la intervención de fuerzas de seguridad o servicios de emergencia médica.</li> <li>Contactos de emergencia: Las personas designadas como contactos de confianza en la Aplicación, a quienes se les notificará sobre su situación.</li> <li>Proveedores de servicios tecnológicos: Únicamente aquellos que participen en el funcionamiento de la Aplicación, sujetos a estrictas medidas de confidencialidad.</li> </ul> <p style={{ textAlign: "justify" }}> Protección de sus datos:
Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra pérdida, robo, acceso no autorizado, alteración o destrucción. El acceso a sus datos personales está restringido únicamente al personal autorizado, quienes están obligados a mantener la confidencialidad de los mismos.

</p> <p style={{ textAlign: "justify" }}> Consentimiento y derechos de las usuarias:
Al utilizar esta Aplicación, usted otorga su consentimiento para el tratamiento de sus datos personales conforme a lo descrito en este aviso de privacidad. Asimismo, le informamos que tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales, así como a retirar su consentimiento en cualquier momento, siguiendo los procedimientos establecidos por la ley aplicable.

</p> <p style={{ textAlign: "justify" }}> Modificaciones al aviso de privacidad:
Este aviso de privacidad puede ser modificado en cualquier momento para cumplir con cambios legislativos, políticas internas o nuevos requerimientos para la prestación de nuestros servicios. Cualquier modificación se informará a través de los medios de contacto proporcionados por la usuaria o dentro de la misma Aplicación.

</p> <p style={{ textAlign: "justify" }}> Contacto:
Para cualquier consulta relacionada con este aviso de privacidad o para ejercer sus derechos, puede comunicarse a través del número 6543258793 o ingresar a ayudarapidaaguascalientes@gmail.com donde podrá encontrar más información.

</p>
            <div>
            <label className={Styles.customCheckbox}>
    <input
        type="checkbox"
        checked={termsAccepted}
        onChange={handleTermsChange}
    />
    <span className={Styles.checkboxText}>Acepto los términos y condiciones</span>
</label>

            </div>
            <button 
                onClick={handleContinue} 
                disabled={!termsAccepted}  // Deshabilita el botón si no se aceptan los términos
            >
                Continuar
            </button>
        </div>
    );
};

export default PrivacityNotice;

