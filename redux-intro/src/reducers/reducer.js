import * as actionTypes from '../actions';

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.INCREMENT: return { ...state, counter: state.counter + 1 }
    case actionTypes.DECREMENT: return { ...state, counter: state.counter - 1 }
    case actionTypes.RESET: return { ...state, counter: 0 }
    case actionTypes.ADDFIVE: return {
      ...state, counter: state.counter + 5
    }
    case actionTypes.REMOVEFIVE: return {
      ...state, counter: state.counter - 5
    }
  }
  return state
}

const initialState = {
  counter: 0
}

export default reducer;