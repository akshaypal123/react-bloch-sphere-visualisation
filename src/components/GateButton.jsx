import './GateButton.css';

const GateButton = (props) => {
    function applyGate() {
        console.log('Button pressed!');
    }

    return (<button onClick={applyGate} id={props.id}>{props.name}</button>)
}

export default GateButton; 