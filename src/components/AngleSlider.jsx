import React from 'react';

const AngleSlider = (props) => {
    const [value, setValue] = React.useState(value);
    function handleChange() {
        setValue;
    }
    return (
        <div>
            <p id={props.containerId}>{props.text} <output id={props.valueId}></output></p>
            <input onChange={handleChange} type="range" min={props.min} max={props.max} value="0" className="slider" id={props.sliderId}></input>
        </div>
    )
}

export default AngleSlider