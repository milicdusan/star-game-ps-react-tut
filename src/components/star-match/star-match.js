import React, {useState} from 'react';
import GameBoard from '../game-board/game-board';

const StarMatch = () => {
    const [gameId, setGameId] = useState(1);

    return <GameBoard key={gameId} startNewGame={() => setGameId(gameId + 1)}/>   
}

export default StarMatch;