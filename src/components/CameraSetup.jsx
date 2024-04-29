import { useThree } from '@react-three/fiber';

const CameraSetup = () => {
    const { camera } = useThree();
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0); // the center of the sphere
    return null;
  }

  export default CameraSetup;
