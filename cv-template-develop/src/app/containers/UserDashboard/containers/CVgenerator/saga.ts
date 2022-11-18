import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import API from 'utils/apiHelper';
import { selectUserInsertData } from './selectors';
import { cVgeneratorActions as actions } from './slice';

function* userDataRequest() {
  try {
    const data: any = yield select(selectUserInsertData);
    const token: any = localStorage.getItem('token');
    console.log(data);
    console.log(token);
    const loginResp: any = yield fork(
      API.post(
        'resume',
        actions.userSuccess,
        actions.userFailed,
        data,
        token,
        'POST',
      ),
    );
    if (loginResp) {
      yield take(actions.userSuccess);
    }
  } catch (err) {
    yield put(actions.userFailed);
  }
}
export function* cVgeneratorSaga() {
  yield takeLatest(actions.userDataRequest.type, userDataRequest);
  // yield takeLatest(actions.someAction.type, doSomething);
}
