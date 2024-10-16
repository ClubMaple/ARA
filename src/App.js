import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Pantallas */
import FirstScreen from './Screens/FirstScreen';
import Home from './Screens/Home';
import RegisterForm from './Screens/RegisterForm';
import FakeCall from './Screens/FakeCall';
import Settings from './Screens/Settings';

/* Ahora no cuenta con una forma de navegar entre pantallas, para ver las diferentes pantallaas puedes cambiar
de pantalla cambiandolo por la pantalla que quieres ver  ( Home , FirstScreen o RegisterForm )*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/fakeCall" element={<FakeCall />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
