import React from 'react';
import { connect } from 'react-redux';
import { timeTick } from 'actions';

const mapStateToProps = (state) => {
    return {
        gameIsRunning: state.gameIsRunning,
        time: state.time
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        timeTick: () => dispatch(timeTick())
    }
}

const Timer = (props) => <div className='timer'>TIME: { props.time }</div>;

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
