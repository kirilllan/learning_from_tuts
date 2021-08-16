import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../actions.js';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score is: {this.props.ctr}</h1>
        <div>
          <button onClick={this.props.onIncCounter}>+</button>
          <button onClick={this.props.onDecCounter}>-</button>
          <button onClick={this.props.resetCounter}>reset</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    resetCounter: () => dispatch({ type: actionTypes.RESET })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);