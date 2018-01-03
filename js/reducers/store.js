import { createStore } from 'redux'

const defaultState = {
    score: 120,
    isRunning: false,
    nextPiece: ''
}

const gameReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_SCORE': 
            console.log('adding score: ', action.score)
            return {
                ...state,
                score: state.score + action.score
            }
        default:
            return state;
    }
}

export default createStore(gameReducers)
