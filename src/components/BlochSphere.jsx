import * as THREE from 'three'
import AxisArrow from './AxisArrow.jsx'

const BlochSphere = (props) => {
    const origin = new THREE.Vector3();
    const xDir = new THREE.Vector3(1, 0, 0).normalize();
    const yDir = new THREE.Vector3(0, 1, 0).normalize();
    const zDir = new THREE.Vector3(0, 0, 1).normalize();
    return (
        <mesh visible={ true } position={ props.position }>
            <sphereGeometry args={[props.radius]} />
            <meshBasicMaterial color={props.color} wireframe={true} />
            <AxisArrow direction = {xDir} origin = {origin} length = {props.radius + .75} color = {'red'} />
            <AxisArrow direction = {yDir} origin = {origin} length = {props.radius + .75} color = {'green'} />
            <AxisArrow direction = {zDir} origin = {origin} length = {props.radius + .75} color = {'blue'} />
        </mesh>
    )
}

export default BlochSphere;

