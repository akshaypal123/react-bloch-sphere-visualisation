import React from 'react';

const AngleSlider = (props) => {
    return (
        <div>
            <p>{props.text + ' = ' + props.angle.toString()}</p>
            <input type='range' min={props.min} max={props.max} step={props.step} value={props.angle} onChange={(e) => props.handler(e.target.value)}></input>
        </div>
    )
}

export default AngleSlider;