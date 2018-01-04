import React from 'react'
import { connect } from 'react-redux'
import View from 'views/next'

const mapStateToProps = (state) => ({
    nextPiece: state.nextPiece
});

const Next = (props) => <View data={ props.nextPiece } />

export default connect(mapStateToProps)(Next)
