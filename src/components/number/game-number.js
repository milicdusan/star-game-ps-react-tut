import React from 'react';

const GameNumber = props => (
    <button className="number" onClick={() => console.log(props.number)}>{props.number}</button>
);

export default GameNumber;