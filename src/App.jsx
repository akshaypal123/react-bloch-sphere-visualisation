import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BlochSphere from './components/BlochSphere.jsx';
import CameraSetup from './components/CameraSetup.jsx';
import GateButton from './components/GateButton.jsx';
import AngleSlider from './components/AngleSlider.jsx';


const App = () => {
  return (
    <>
      <Canvas>
        <BlochSphere radius={2} color={'gray'} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <CameraSetup />
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li>
            <AngleSlider min={0} max={180} step={1} text={'Polar angle'} />
          </li>
          <li>
            <AngleSlider min={0} max={360} step={1} text={'Azimuthal angle'} />
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
