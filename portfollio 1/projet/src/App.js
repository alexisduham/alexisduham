import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './pages/Contact';
import Acceuil from './pages/Acceuil';
import Famille from './pages/Famille';
import Circuits from './pages/Circuits';
import Destination from './pages/Destination';


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <Notfound /> } />
        <Route path="/famille" element={ <Famille /> } />
        <Route path="/Evasion" element={ <Evasion /> } />
        <Route path="/Acceuil" element={ <Acceuil /> } />
        <Route path="/Destination" element={ <Destination /> } />
        <Route path="/Circuits" element={ <Circuits /> } />

        
        
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
