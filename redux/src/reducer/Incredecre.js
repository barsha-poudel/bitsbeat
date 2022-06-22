const initializestate = 0;
const ReactReducer = (state = initializestate, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREMENT":
      let incrementBy = action.payload; 
      return state + incrementBy;
    case "DECREMENT":
      return state - 1;
    default: return state;
  }
};
export default ReactReducer;
