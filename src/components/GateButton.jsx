import './GateButton.css';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import * as math from 'mathjs';


const GateButton = (props) => {
    
    function applyGateButton() {
        switch(props.name) {
            case 'H':
                console.log('Pressed Hadamard Button');
                const hMatrix = math.multiply(1 / math.sqrt(2), math.matrix([[1, 1], [1, -1]]));
                const qubit = math.matrix([props.alpha, props.beta]);
                const result = math.multiply(hMatrix, qubit)
                props.stateToAngles(result)
                break;
            case 'P_x':
                console.log('Pressed Pauli X Button');
                break;
            case 'P_y':
                console.log('Pressed Pauli Y Button');
                break;
            case 'P_z':
                console.log('Pressed Pauli Z Button');
                break;
            default:
                console.log('Button not implemented yet!');
        }
    }

    return (
        <button onClick={applyGateButton} id={props.id}><Latex>${props.name}$</Latex></button>
    )
}

export default GateButton; 