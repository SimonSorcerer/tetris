import { createStore } from 'redux';
import { getRandomPieceMatrix } from 'helpers/pieces';

const defaultState = {
    score: 120,
    gameIsRunning: false,
    nextPiece: getRandomPieceMatrix(),
    currentPiece: null,
    currentPieceRotation: 0
}

const gameReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_GAME': 
            console.log('starting game');
            return {
                ...state,
                gameIsRunning: true,
                currentPiece: state.nextPiece,
                nextPiece: getRandomPieceMatrix()
            }
        case 'ADD_SCORE': 
            console.log('adding score: ', action.score);
            return {
                ...state,
                score: state.score + action.score
            }
        default:
            return state;
    }
}

export default createStore(gameReducers)
