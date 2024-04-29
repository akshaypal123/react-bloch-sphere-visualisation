const AxisArrow = (props) => {
    return (
        <mesh>
            <arrowHelper args={[props.direction, props.origin, props.length, props.color]}/>
        </mesh>
    )
}

export default AxisArrow; 
