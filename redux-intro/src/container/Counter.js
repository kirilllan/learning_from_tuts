import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score is: 0</h1>
        <div>
          <button>+1</button>
          <button>-1</button>
        </div>
      </div>
    )
  }
}

export default Counter;