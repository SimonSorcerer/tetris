import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    score: state.score
});

const Score = (props) => <div className='score'>SCORE: { props.score }</div>;

export default connect(mapStateToProps)(Score)
