import React, {useState} from 'react';
import './game-board.css';
import Util from '../../util/util';
import GameNumber from '../number/game-number';
import StarsDisplay from '../stars-display/stars-display';
import PlayAgain from '../play-again/play-again';

const GameBoard = () => {
    const [stars, setStars] = useState(Util.random(1, 9));
    const [availableNums, setAvailableNums] = useState(Util.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);

    const candidatesAreWrong = Util.sum(candidateNums) > stars;
    const gameIsDone = availableNums.length === 0;

    const resetGame = () => {
        setStars(Util.random(1, 9));
        setAvailableNums(Util.range(1, 9));
        setCandidateNums([]);
    }

    const numberStatus = (number) => {
        if(!availableNums.includes(number)) {
            return 'used';
        }
        if(candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate'
        }

        return 'available';
    };

    const onNumberClick = (number, currentStatus) => {
        if(currentStatus === 'used') {
            return;
        }

        const newCandidateNums = currentStatus === 'available' ? 
            candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);

        if(Util.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );

            setStars(Util.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return(
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                {
                    gameIsDone ? <PlayAgain onClick={resetGame}/> : <StarsDisplay count={ stars}/>
                }
                </div>
                <div className="right">
                    {
                        Util.range(1, 9).map(number => 
                            <GameNumber 
                                key={number}
                                status={numberStatus(number)} 
                                number={number}
                                onClick={onNumberClick}
                            />
                        )
                    }
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
}

export default GameBoard;