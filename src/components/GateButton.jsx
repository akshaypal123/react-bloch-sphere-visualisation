import './GateButton.css';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';


const GateButton = (props) => {
    
    function applyGateButton() {
        switch(props.name) {
            case 'H':
                console.log('Pressed Hadamard Button');
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