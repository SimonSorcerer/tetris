import React from 'react'
import { connect } from 'react-redux'
import View from 'views/score'

const mapStateToProps = (state) => ({
    score: state.score
});

const Score = (props) => <View score={ props.score } />

export default connect(mapStateToProps)(Score)
