import './App.css';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BlochSphere from './components/BlochSphere.jsx';
import CameraSetup from './components/CameraSetup.jsx';
import GateButton from './components/GateButton.jsx';
import AngleSlider from './components/AngleSlider.jsx';



const App = () => {

  const startingTheta = Math.round(180 * Math.random());
  const startingPhi = Math.round(360 * Math.random());

  const [theta, setTheta] = useState(startingTheta);
  const [phi ,setPhi] = useState(startingPhi);
  
  return (
    <>
      <Canvas>
        <BlochSphere radius={5} color={'gray'} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <CameraSetup />
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li id="angles-title-container">
            <h3 id="angles-title">Angles:</h3>
          </li>
          <li>
            <AngleSlider min={0} max={180} step={1} text={'Polar angle'} angle={theta} handler={setTheta} />
          </li>
          <li>
            <AngleSlider min={0} max={360} step={1} text={'Azimuthal angle'} angle={phi} handler={setPhi} />
          </li>
          <li id="gates-title-container">
            <h3 id="gates-title">Gates:</h3>
          </li>
          <li>
            <GateButton id={'hadamard-button'} name={'H'} />
          </li>
          <li>
            <GateButton id={'pauliX-button'} name={'P_X'} />
          </li>
        </ul>
      </nav>
    </>
  )
}


export default App;
