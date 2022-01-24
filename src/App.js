
import './App.css';

import {  Routes, Route  } from "react-router-dom";

import Navigation from './components/Navigation.js'
import Proteina from './components/Proteina.js'
import Carbos from './components/Carbos'
import Grasa from './components/Grasas'
import Fibra from './components/Fibra'

function App() {
  return (
    <div>
      <Navigation/>
      <div className='container p-4'>
      <Routes>
          <Route path="/"  element={<Proteina/>} />
          <Route path="/Carbohidratos" element={<Carbos/>} />
          <Route path="/Grasas" element={<Grasa/>} />
          <Route path="/Fibras" element={<Fibra/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
