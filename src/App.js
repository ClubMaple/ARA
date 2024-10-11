import React from 'react';
// import logo from './logo.svg';
import './App.css';

/* Pantallas */
import FirstScreen from './Screens/FirstScreen';
import Home from './Screens/Home';
import RegisterForm from './Screens/RegisterForm';

/* Ahora no cuenta con una forma de navegar entre pantallas, para ver las diferentes pantallaas puedes cambiar
de pantalla cambiandolo por la pantalla que quieres ver  ( Home , FirstScreen o RegisterForm )*/

function App() {
  return (
    <>
      <RegisterForm/> {/* Cambia este elemento por el nombre de la pantalla */}
    </>
  );
}

export default App;
