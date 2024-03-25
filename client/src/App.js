import { useContext, useRef } from "react";
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import VehiclePrice from './pages/VehiclePrice';
import VehicleChart from './pages/VehicleChart';
import AllPortFolio from './pages/AllPortFolio';
import VehiclePortFolio from './pages/VehiclePortFolio';
import Login from './pages/Login';
import Admin from './pages/Admin/Admin';
import Register from './pages/Register';
import { Context } from './context/Context';
import VehicleInfo from "./pages/VehicleInfo";

function App() {

  const { user } = useContext(Context);

  console.log(user);

  return (
    <Routes>
        <Route path="/" element={ user ? (user.username === 'admin' ? <Admin /> : <Home />) : <Login /> } />
        <Route path="/vehicle-price/:id" element={ <VehiclePrice/> } />
        <Route path="/graphs/:id" element={ <VehicleChart/> } />
        <Route path="/portfolio/:id" element={ <AllPortFolio/> } />
        <Route path="/help" element={ <VehicleInfo/> } />
    </Routes>
  );
 }

export default App;
