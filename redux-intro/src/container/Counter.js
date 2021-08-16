import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score is: {this.props.ctr}</h1>
        <div>
          <button onClick={this.props.onIncCounter}>+</button>
          <button>-</button>
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
    onIncCounter: () => dispatch({ type: "INCREMENT" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);