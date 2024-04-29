import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BlochSphere from './components/BlochSphere.jsx';
import CameraSetup from './components/CameraSetup.jsx';

const App = () => {
  return (
    <Canvas>
      <BlochSphere radius = { 2 } color = { 'gray' } position = { [0, 0, 0] } />
      <CameraSetup />
      <OrbitControls />
    </Canvas>
  )
}

export default App;
