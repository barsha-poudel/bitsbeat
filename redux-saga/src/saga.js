import { call, put, takeEvery } from "@redux-saga/core/effects";

import types from "./actions/types";

function postsfetch() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* workGetPostsfetch(action) {
  console.log("here");
  try {
    const posts = yield call(postsfetch);
    yield put({ type: types.GET_POSTS_SUCCESS, posts: posts });
  } catch (err) {
    console.log(err);
  }
}

function* mySaga() {
  yield takeEvery(types.GET_POSTS_FETCH, workGetPostsfetch);
}

export default mySaga;
