/**
 * Root saga manages watcher lifecycle
 */
import { BASE_URL } from 'Constants/uris';
import { put, select, takeLatest, fork, take } from 'redux-saga/effects';
import API from 'utils/apiHelper';
import { selectUserInsertSuccess, selectUserInsertData } from './selectors';
import { userActions as actions } from './slice';
import history from 'utils/history';

function* userDataRequest() {
  try {
    const data: any = yield select(selectUserInsertData);
    console.log(data);
    const loginResp: any = yield fork(
      API.post(
        'auth/login',
        actions.userInsertSuccess,
        actions.userInsertFailed,
        data,
        '',
        'POST',
      ),
    );
    yield put(actions.userInsertSuccess({}));
    if (loginResp) {
      yield take(actions.userInsertSuccess);
      history.push("/userdashboard")
    }
  } catch (err) {
    yield put(actions.userInsertFailed);
  }
}
export function* userinfoSaga() {
  yield takeLatest(actions.userDataInsertRequest.type, userDataRequest);
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
}
