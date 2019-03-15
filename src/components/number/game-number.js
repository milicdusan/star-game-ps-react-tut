import React from 'react';
import Colors from '../../util/colors';

const GameNumber = props => (
    <button 
        className="number" 
        style={{ backgroundColor: Colors[props.status]}}
        onClick={() => console.log(props.number)}>
        {props.number}
    </button>
);

export default GameNumber;