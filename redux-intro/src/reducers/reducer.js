import * as actionTypes from '../actions';

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.INCREMENT: return { ...state, counter: state.counter + 1 }
    case actionTypes.DECREMENT: return { ...state, counter: state.counter - 1 }
    case actionTypes.ADD: return { ...state, counter: state.counter + action.value }
    case actionTypes.REMOVE: return { ...state, counter: state.counter - action.value }
    case actionTypes.RESET: return { ...state, counter: 0 }
    case actionTypes.STORE_RESULT: return { ...state, results: state.results.concat({ id: new Date(), value: state.counter }) }
  }
  return state
}

const initialState = {
  counter: 0,
  results: [{
    id: 1,
    value: 10
  }, {
    id: 2,
    value: 20
  }]
}

export default reducer;