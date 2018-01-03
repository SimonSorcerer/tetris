import React from 'react'
import { connect } from 'react-redux'
import View from 'views/game'

const mapStateToProps = (state) => {
    return {
        score: state.score
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

class Game extends React.Component {
    render() {
        return <View score={ this.props.score } />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
