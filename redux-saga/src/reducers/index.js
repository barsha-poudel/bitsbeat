import myReducer from "./myReducer";

export default function reducer(state = {}, action) {
  // always return a new object for the root state
  return {
    // the value of `state.todos` is whatever the todos reducer returns
    myReducer: myReducer(state.myReducer, action),
  };
}
