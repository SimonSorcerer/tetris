import { createStore } from 'redux';
import { getRandomPieceMatrix } from 'helpers/pieces';

const board = {
    width: 26,
    height: 30
};

const defaultState = {
    score: 120,
    timer: 0,
    gameIsRunning: false,
    nextPiece: getRandomPieceMatrix(),
    activePiece: {
        data: null,
        position: null
    },
    board: Array(board.height).fill(Array(board.width).fill(0))
}

const gameReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_GAME': 
            console.log('starting game');
            return {
                ...state,
                gameIsRunning: true,
                activePiece: {
                    data: state.nextPiece,
                    position: { x: 0, y: board.width / 2 - Math.floor(state.nextPiece[0].length / 2) }
                },
                nextPiece: getRandomPieceMatrix()
            }
        case 'ADD_SCORE': 
            console.log('adding score: ', action.score);
            return {
                ...state,
                score: state.score + action.score
            }
        case 'TIME_TICK':
            return {
                ...state,
                timer: timer + 1,
                activePiece: {
                    ...state.activePiece,
                    position: {
                        x: state.activePiece.position.x + 1,
                        y: state.activePiece.position.y
                    }
                }
            }
        default:
            return state;
    }
}

export default createStore(gameReducers)
