const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state, counter: state.counter + 1
    }
  }
  if (action.type === "DECREMENT") {
    return {
      ...state, counter: state.counter - 1
    }
  }
  if (action.type === "RESET") {
    return {
      ...state, counter: 0
    }
  }
  return state;
}

const initialState = {
  counter: 0
}

export default reducer;