import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import VehiclePrice from './pages/VehiclePrice';
import VehicleChart from './pages/VehicleChart';
import AllPortFolio from './pages/AllPortFolio';
import VehiclePortFolio from './pages/VehiclePortFolio';

function App() {
  return (

    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/vehicle-price/:id" element={ <VehiclePrice/> } />
        <Route path="/graphs/:id" element={ <VehicleChart/> } />
        <Route path="/portfolio/:id" element={ <AllPortFolio/> } />
        
    </Routes>
  );
 }

export default App;
