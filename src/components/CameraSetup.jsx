import { useThree } from '@react-three/fiber';

const CameraSetup = () => {
    const { camera } = useThree();
    camera.up.set(0, 0, 1);
    return null;
  }

  export default CameraSetup;
