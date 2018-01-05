import React from 'react';
import { connect } from 'react-redux';
import { timeTick } from 'actions';
import GameView from 'views/game';

const mapStateToProps = (state) => {
    return {
        gameIsRunning: state.gameIsRunning
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        timeTick: () => dispatch(timeTick())
    }
}

class Timer extends React.Component {
    render() {
        return <div></div>;
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game)
