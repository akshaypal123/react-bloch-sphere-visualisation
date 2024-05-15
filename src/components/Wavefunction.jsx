import React, { useEffect } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import * as math from 'mathjs';

const Wavefunction = (props) => {

    useEffect(() => {
        const theta = props.theta * Math.PI / 180;
        const phi = props.phi * Math.PI / 180;

        const alpha = Math.cos(theta * 0.5);
        const beta = math.multiply(math.exp(math.complex(0, phi)), Math.sin(theta * 0.5));
        props.setAlpha(math.round(math.abs(alpha), 3));
        props.setBeta(math.round(math.abs(beta), 3));
    }, [props.theta, props.phi]);

    return (
        <div id="wavefunction-container">
            <Latex>$\vert\psi\rangle$ = ${props.alpha}\vert0\rangle$ $+$ ${props.beta}\vert1\rangle$</Latex>
        </div>
    )
};

export default Wavefunction;
