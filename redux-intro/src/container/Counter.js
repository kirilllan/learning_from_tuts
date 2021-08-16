import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    onIncCounter: () => dispatch({ type: "INCREMENT" }),
    onDecCounter: () => dispatch({ type: "DECREMENT" }),
    resetCounter: () => dispatch({ type: "RESET" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);