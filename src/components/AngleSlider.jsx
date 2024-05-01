import React, { useState, useEffect, useRef } from 'react';

const AngleSlider2 = ({ min, max, step, text }) => {
    const [data, setData] = useState(Math.round(max * Math.random()))

    return (
        <div>
            <p>{text + ' = ' + data.toString()}</p>
            <input type='range' min={min} max={max} step={step} value={data} onChange={(e) => { setData(e.target.value); return e.target.value; }}></input>
        </div>
    )
}

export default AngleSlider2;