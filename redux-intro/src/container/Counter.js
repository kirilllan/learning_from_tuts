import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score is: {this.props.ctr}</h1>
        <div>
          <button onClick={this.props.onIncCounter}>+</button>
          <button onClick={this.props.onDecCounter}>-</button>
          <button onClick={this.props.onAdd}>+5</button>
          <button onClick={this.props.onRemove}>-5</button>
          <button onClick={this.props.resetCounter}>reset</button>
        </div>
        <button onClick={this.props.onStoreResult}>Store the results</button>
        <div>
          <ul>
            {this.props.storedResults.map(item => <li key={item.id}>{item.value}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAdd: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onRemove: () => dispatch({ type: actionTypes.REMOVE, value: 5 }),
    resetCounter: () => dispatch({ type: actionTypes.RESET }),
    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);