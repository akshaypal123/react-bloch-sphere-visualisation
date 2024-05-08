import './GateButton.css';

const GateButton = (props) => {
    
    function applyGateButton() {
        switch(props.name) {
            case 'H':
                console.log('Pressed Hadamard Button');
                break;
            case 'P_X':
                console.log('Pressed Pauli X Button');
                break;
            default:
                console.log('Button not implemented yet!');
        }
    }

    return (
        <button onClick={applyGateButton} id={props.id}>{props.name}</button>
    )
}

export default GateButton; 