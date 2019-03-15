import React, {useState} from 'react';
import './game-board.css';
import Util from '../../util/util';
import GameNumber from '../number/game-number';
import StarsDisplay from '../stars-display/stars-display';

const GameBoard = () => {
    const [stars, setStars] = useState(Util.random(1, 9));

    return(
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    <StarsDisplay count={stars}/>
                </div>
                <div className="right">
                    {
                        Util.range(1, 9).map(number => <GameNumber key={number} number={number}/>)
                    }
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
}

export default GameBoard;