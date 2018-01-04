import React from 'react'
import { connect } from 'react-redux'
import View from 'views/board'

const mapStateToProps = (state) => ({
    board: state.board,
    gameIsRunning: state.gameIsRunning
});

const Board = (props) => <View data={ props.board } isDimmed={ !props.gameIsRunning } />

export default connect(mapStateToProps)(Board)
