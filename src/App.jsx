// Libraries
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import * as math from 'mathjs';

// CSS
import './App.css';

// Components
import AngleSlider from './components/AngleSlider.jsx';
import BlochSphere from './components/BlochSphere.jsx';
import CameraSetup from './components/CameraSetup.jsx';
import GateButton from './components/GateButton.jsx';
import QubitVector from './components/QubitVector.jsx';
import Wavefunction from './components/Wavefunction.jsx';

const App = () => {

  const startingTheta = Math.round(180 * Math.random());
  const startingPhi = Math.round(360 * Math.random());
  const radius = 5;

  const [theta, setTheta] = useState(startingTheta);
  const [phi, setPhi] = useState(startingPhi);
  const [alpha, setAlpha] = useState(calculateStartingAlpha(theta));
  const [beta, setBeta] = useState(calculateStartingBeta(theta, phi));

  function calculateStartingAlpha(t) {
    const theta = t * Math.PI / 180;

    const alpha = Math.cos(theta * 0.5);
    return (math.round(math.abs(alpha), 3));
  }

  function calculateStartingBeta(t, p) {
    const theta = t * Math.PI / 180;
    const phi = p * Math.PI / 180;

    const beta = math.multiply(math.exp(math.complex(0, phi)), Math.sin(theta * 0.5));
    return (math.round(math.abs(beta), 3));
  }

  function stateToAngles(qubit) {
    console.log(qubit.get([0]));
    const theta = 2 * Math.acos(math.abs(qubit.get([0])));
    let phi = math.arg(qubit.get([1])); 
    phi = phi < 0 ? 2 * Math.PI + phi : phi;
    setTheta(math.round(theta * 180 / Math.PI));
    setPhi(math.round(phi * 180/ Math.PI));
  }

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
            <AngleSlider min={0} max={180} step={1} text={'Polar angle'} angle={theta} isTheta={true} handler={setTheta} />
          </li>
          <li>
            <AngleSlider min={0} max={360} step={1} text={'Azimuthal angle'} angle={phi} isTheta={false} handler={setPhi} />
          </li>
          <li id="gates-title-container">
            <h3 id="gates-title">Gates:</h3>
          </li>
          <li>
            <GateButton id={'hadamard-button'} name={'H'} alpha={alpha} beta={beta} stateToAngles={stateToAngles} />
          </li>
          <li>
            <GateButton id={'pauliX-button'} name={'P_x'} />
          </li>
          <li>
            <GateButton id={'pauliY-button'} name={'P_y'} />
          </li>
          <li>
            <GateButton id={'pauliZ-button'} name={'P_z'} />
          </li>
          <li id="wavefunction-title-container">
            <h3 id="wavefunction-title">Wavefunction:</h3>
          </li>
          <li>
            <Wavefunction theta={theta} phi={phi} alpha={alpha} beta={beta} setAlpha={setAlpha} setBeta={setBeta} />
          </li>
        </ul>
      </nav>
    </>
  )
}


export default App;
