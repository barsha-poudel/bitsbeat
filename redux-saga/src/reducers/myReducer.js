import types from "../actions/types";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS_FETCH:
      return { ...state, loading: true };

    case types.GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.posts };

    default:
      return state;
  }
};
export default myReducer;
