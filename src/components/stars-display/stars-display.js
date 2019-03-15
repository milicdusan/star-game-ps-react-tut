import React from 'react';
import Util from '../../util/util';

const StarsDisplay = props => (
    <>
        {Util.range(1, props.count).map(starId => <div key={starId} className="star"></div>)}
    </>
);

export default StarsDisplay;