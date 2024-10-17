import React, { useEffect, useRef, useState } from "react";
import Styles from "./FakeCall.module.css";
import { useNavigate } from "react-router-dom"; // Cambiar de Link a useNavigate

function FakeCall() {
  const callerName = "Mamá ❤️‍🩹"; // Nombre del contacto
  const callerImage = "https://imgs.search.brave.com/pt3EZdsD-C0xL3UJoM58vvW7cT4DlXVuNQWk8qRfEEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8xMC8wNS80OC91/c2VyLTI5MzU1Mjdf/MTI4MC5wbmc"; // Imagen del contacto

  const ringtone = useRef(null);
  const [isRinging, setIsRinging] = useState(false); // Estado para controlar el timbre
  const navigate = useNavigate(); // Usar useNavigate en lugar de Link

  const startRingtone = () => {
    if (!isRinging) {
      setIsRinging(true);
      ringtone.current.play().catch((error) => {
        console.error("Error al reproducir el sonido: ", error);
      });
    }
  };

  useEffect(() => {
    startRingtone(); // Reproduce el tono al instante al cargar el componente

    // Detiene el sonido cuando el componente se desmonta
    return () => {
      if (ringtone.current) {
        ringtone.current.pause();
      }
    };
  }, []);


  const handleDeclineCall = () => {
    if (ringtone.current) {
      ringtone.current.pause();
      setIsRinging(false); // Actualiza el estado
    }
    navigate("/home"); // Redirige a home al colgar
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Llamada Entrante</h1>
      
      <div className={Styles.callerInfo}>
        <img src={callerImage} alt="Caller" className={Styles.callerImage} />
        <h2 className={Styles.callerName}>{callerName}</h2>
      </div>
      
      <div className={Styles.callActions}>
        <button className={Styles.acceptButton}>
          <div className={Styles.circleAnimation}></div>
          <span>Responder</span>
        </button>
        <button className={Styles.declineButton} onClick={handleDeclineCall}>
          <div className={Styles.circleAnimation}></div>
          <span>Colgar</span>
        </button>
      </div>
      <audio ref={ringtone} src="/llamada.mp3" loop />
    </div>
  );
}

export default FakeCall;