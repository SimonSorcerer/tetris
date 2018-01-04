import { createStore } from 'redux';
import { getRandomPieceMatrix } from 'helpers/pieces';

const board = {
    width: 26,
    height: 30
};

const defaultState = {
    score: 120,
    gameIsRunning: false,
    nextPiece: getRandomPieceMatrix(),
    currentPiece: null,
    currentPiecePosition: null,
    currentPieceRotation: 0,
    board: Array(board.height).fill(Array(board.width).fill(0))
}

const gameReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_GAME': 
            console.log('starting game');
            return {
                ...state,
                gameIsRunning: true,
                currentPiece: state.nextPiece,
                currentPiecePosition: { x: 0, y: board.width / 2 - Math.floor(state.nextPiece.lenght / 2) },
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
