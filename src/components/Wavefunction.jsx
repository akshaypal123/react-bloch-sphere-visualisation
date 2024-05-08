import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import * as math from 'mathjs';

const Wavefunction = (props) => {

    function calculateAlphaAndBeta() {
        const theta = props.theta * Math.PI / 180;
        const phi = props.phi * Math.PI / 180;

        const alpha = Math.cos(theta * 0.5);
        const beta = math.multiply(math.exp(math.complex(0, phi)), Math.sin(theta * 0.5));
        return [alpha, beta]
    }

    const globalAlpha = math.round(math.abs(calculateAlphaAndBeta()[0]), 3);
    const globalBeta = math.round(math.abs(calculateAlphaAndBeta()[1]), 3);

    return (
        <Latex>$\vert\psi\rangle$ = ${globalAlpha}\vert0\rangle$ $+$ ${globalBeta}\vert1\rangle$</Latex>
    )
};

export default Wavefunction;
