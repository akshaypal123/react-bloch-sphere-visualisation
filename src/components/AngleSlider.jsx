import React from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const AngleSlider = (props) => {
    function determineLabel() {
        if(props.isTheta) {
            return (<p><Latex>{props.text} $\theta =$ ${props.angle.toString()}^\circ$</Latex></p>);
        }
        else {
            return (<p><Latex>{props.text} $\phi =$ ${props.angle.toString()}^\circ$</Latex></p>);
        }
    }

    const label = determineLabel();
    return (
        <div>
            {label}           
            <input type='range' min={props.min} max={props.max} step={props.step} value={props.angle} onChange={(e) => props.handler(e.target.value)}></input>
        </div>
    )
}

export default AngleSlider;