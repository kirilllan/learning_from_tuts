import React, { Component } from 'react';

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