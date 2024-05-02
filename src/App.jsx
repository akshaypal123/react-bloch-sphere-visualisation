// Libraries
import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';

// CSS
import './App.css';

// Components
import AngleSlider from './components/AngleSlider.jsx';
import BlochSphere from './components/BlochSphere.jsx';
import CameraSetup from './components/CameraSetup.jsx';
import GateButton from './components/GateButton.jsx';
import QubitVector from './components/QubitVector.jsx';

const App = () => {

  const startingTheta = Math.round(180 * Math.random());
  const startingPhi = Math.round(360 * Math.random());
  const radius = 5;

  const [theta, setTheta] = useState(startingTheta);
  const [phi, setPhi] = useState(startingPhi);

  return (
    <>
      <Canvas>
        <BlochSphere radius={radius} color={'gray'} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <QubitVector radius={radius} theta={theta} phi={phi} />
        <CameraSetup />
        <CameraControls target={[0, 0, 0]} />
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
