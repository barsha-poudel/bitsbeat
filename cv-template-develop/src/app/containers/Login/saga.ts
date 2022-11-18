/**
 * Root saga manages watcher lifecycle
 */
import { BASE_URL } from 'Constants/uris';
import { put, select, takeLatest, fork, take } from 'redux-saga/effects';
import API from 'utils/apiHelper';
import { selectLoginData, selectLoginSuccess } from './selectors';
import { loginActions as actions } from './slice';
import history from 'utils/history';

function* saveLoginRequest() {
  try {
    const data: any = yield select(selectLoginData);
    console.log(data);
    const loginResp: any = yield fork(
      API.post(
        'auth/login',
        actions.loginSuccess,
        actions.loginFailed,
        data,
        '',
        'POST',
      ),
    );
    yield put(actions.loginSuccess({}));
    if (loginResp) {
      yield take(actions.loginSuccess);
    }
  } catch (err) {
    yield put(actions.loginFailed);
  }
}
function* TokenVerificationRequest() {
  try {
    const token: any = localStorage.getItem('token');
    const loginResp: any = yield fork(
      API.post(
        'auth/verifytoken',
        actions.userTokenSuccess,
        actions.userTokenFailed,
        {},
        token,
        'POST',
      ),
    );
    if (loginResp) {
      yield take(actions.userTokenSuccess);
      history.push('/userdashboard');
    }
  } catch (err) {
    yield put(actions.userTokenFailed);
  }
}
export function* loginSaga() {
  yield takeLatest(actions.loginRequest.type, saveLoginRequest);
  yield takeLatest(actions.tokenRequest.type, TokenVerificationRequest);
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
}
