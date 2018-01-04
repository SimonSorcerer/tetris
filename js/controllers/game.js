import React from 'react';
import { connect } from 'react-redux';
import { startGame } from 'actions';
import GameView from 'views/game';

const mapStateToProps = (state) => {
    return {
        gameIsRunning: state.gameIsRunning
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startHandler: () => dispatch(startGame())
    }
}

const Game = (props) => <GameView { ...props } />;

export default connect(mapStateToProps, mapDispatchToProps)(Game)
