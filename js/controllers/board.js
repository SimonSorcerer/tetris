import React from 'react'
import { connect } from 'react-redux'
import View from 'views/board'

const mapStateToProps = (state) => ({
    data: getBoardData(state),
    gameIsRunning: state.gameIsRunning
});

const cloneBoard = (board) => board.map(row => row.slice(0));


const getBoardData = (state) => {
    const activePiece = state.activePiece;
    const board = cloneBoard(state.board);

    if (!state.gameIsRunning) {
        return board;
    }

    console.log(activePiece);
    
    const addBlock = (block, x, y) => board[activePiece.position.x + x][activePiece.position.y + y] = block;
    const addRow = (row, x) => row.forEach((block, y) => addBlock(block, x, y));

    console.log(activePiece.data);
    activePiece.data.forEach((row, x) => addRow(row, x));

    console.log(board);

    return board;
};

const Board = (props) => <View { ...props } gridOn={ true } />

export default connect(mapStateToProps)(Board)
