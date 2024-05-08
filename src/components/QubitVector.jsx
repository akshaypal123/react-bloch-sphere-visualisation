import * as THREE from 'three'
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';


const QubitVector = (props) => {

    const origin = new THREE.Vector3();
    const scene = useThree((state) => state.scene);

    function calculateQubitVector(radius, theta, phi) {
        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(theta);
        const qubitVector = new THREE.Vector3(x, y, z);
        return qubitVector
    }

    useEffect(() => {
        // console.log('This is the useEffect hook!');
        const existingLine = scene.getObjectByName('qubitLine');
        if (existingLine) {
            existingLine.material.dispose();
            existingLine.geometry.dispose();
            scene.remove(existingLine);
        }
        const qubitVector = calculateQubitVector(props.radius, (props.theta * Math.PI / 180), (props.phi * Math.PI / 180));
        const points = [];
        points.push(origin);
        points.push(qubitVector);
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xff69b4,
            linewidth: 10,
            transparent: true
        });
        const qubitLine = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(qubitLine);
        qubitLine.name = 'qubitLine'
        // console.log(qubitLine)
    }, [props.theta, props.phi, scene]);

    // Calculate a global variable equal to the QubitVector in order to render the sphere at the tip of qubitLine
    const globalQubitVector = calculateQubitVector(props.radius, (props.theta * Math.PI / 180), (props.phi * Math.PI / 180));

    return (
        <mesh visible={true} position={globalQubitVector}>
            <sphereGeometry args={[0.075]} />
            <meshBasicMaterial color={0xff69b4} />
        </mesh>
    )
}

export default QubitVector;