import { put, select, takeLatest, fork, take } from 'redux-saga/effects';
import { usersActions as actions } from './slice';
import API from 'utils/apiHelper';
import { selectUserRegisterData } from './selectors';
import { registerUser } from 'Constants/uris';
import history from 'utils/history';

/* 
confirmpassword: "Test@1234"
email: "om@gmail.com"
password: "Test@1234"
*/
export function* saveUserRequest() {
  try {
    const data: any = yield select(selectUserRegisterData);
    const loginResp: any = yield fork(
      API.post(
        'auth/register',
        actions.saveUserSuccess,
        actions.saveUserFailure,
        data,
        '',
        'POST',
      ),
    );
    if (loginResp) {
      yield take(actions.saveUserSuccess);
      history.push('/');
    }
  } catch (err) {
    yield put(actions.saveUserFailure(err));
  }
}

export function* usersSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(actions.saveUserRequest.type, saveUserRequest);
}
