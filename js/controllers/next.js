import React from 'react';
import { connect } from 'react-redux';
import Piece from 'views/piece';

const mapStateToProps = (state) => ({
    nextPiece: state.nextPiece
});

const Next = (props) => <div className='next'><Piece matrix={ props.nextPiece } /></div>;

export default connect(mapStateToProps)(Next)
