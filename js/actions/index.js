export const addScore = (score) => {
    return {
        type: 'ADD_SCORE',
        score
    }
}

export const startGame = () => {
    return {
        type: 'START_GAME'
    }
}

export const timeTick = () => {
    return {
        type: 'TIME_TICK'
    }
}
