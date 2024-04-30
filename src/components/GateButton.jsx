const GateButton = (props) => {
    function applyGate() {
        console.log('Button was clicked!');
    }
    return (<button onClick={applyGate} id={props.id}>{props.name}</button>)
}

export default GateButton; 