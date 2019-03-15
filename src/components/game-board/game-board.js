import React, {useState} from 'react';
import './game-board.css';
import Util from '../../util/util';

const GameBoard = () => {
    const [stars, setStars] = useState(Util.random(1, 9));

    return(
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {
                        Util.range(1, stars).map(starId => <div key={starId} className="star"></div>
                    )}
                </div>
                <div className="right">
                    {
                        Util.range(1, 9).map(number => <button key={number} className="number">{number}</button>)
                    }
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
}

export default GameBoard;