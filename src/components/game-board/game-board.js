import React from 'react';
import './game-board.css';
import Util from '../../util/util';
import GameNumber from '../number/game-number';
import StarsDisplay from '../stars-display/stars-display';
import PlayAgain from '../play-again/play-again';
import useGameState from '../../util/use-game-state';

const GameBoard = props => {
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState
    } = useGameState();

    const candidatesAreWrong = Util.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0 ? 'won' :
        secondsLeft === 0 ? 'lost' : 'active';

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
        if(gameStatus !== 'active' || currentStatus === 'used') {
            return;
        }

        const newCandidateNums = currentStatus === 'available' ? 
            candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);
        
        setGameState(newCandidateNums);
    }

    return(
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                {
                    gameStatus !== 'active' ? 
                        <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/> : <StarsDisplay count={ stars}/>
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
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
}

export default GameBoard;