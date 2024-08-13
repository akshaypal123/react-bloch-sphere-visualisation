import './GateButton.css';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import * as math from 'mathjs';


const GateButton = (props) => {
    
    function applyGateButton() {
        const qubit = math.matrix([props.alpha, props.beta]);
        switch(props.name) {
            case 'H':
                console.log('Pressed Hadamard Button');
                const hMatrix = math.multiply(1 / math.sqrt(2), math.matrix([[1, 1], [1, -1]]));
                props.stateToAngles(math.multiply(hMatrix, qubit));
                break;
            case 'P_x':
                console.log('Pressed Pauli X Button');
                const pXMatrix = math.matrix([[0, 1], [1, 0]]);
                props.stateToAngles(math.multiply(pXMatrix, qubit));
                break;
            case 'P_y':
                console.log('Pressed Pauli Y Button');
                const pYMatrix = math.matrix([[0, math.complex(0, -1)], [math.complex(0, 1), 0]]);
                props.stateToAngles(math.multiply(pYMatrix, qubit));
                break;
            case 'P_z':
                console.log('Pressed Pauli Z Button');
                const pZMatrix = math.matrix([[1, 0], [0, -1]]);
                props.stateToAngles(math.multiply(pZMatrix, qubit));
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