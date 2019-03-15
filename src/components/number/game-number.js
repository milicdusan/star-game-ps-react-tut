import React from 'react';
import Colors from '../../util/colors';

const GameNumber = props => (
    <button 
        className="number" 
        style={{ backgroundColor: Colors[props.status]}}
        onClick={() => props.onClick(props.number, props.status)}>
        {props.number}
    </button>
);

export default GameNumber;