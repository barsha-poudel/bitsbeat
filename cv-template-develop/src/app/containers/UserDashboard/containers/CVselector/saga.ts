import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import API from 'utils/apiHelper';
import {} from './selectors';
import { cVselectorActions as actions } from './slice';
import { SelectRequestSuccess } from './selectors';

// export function* doSomething() {}

function* CvSelectRequest() {
  try {
    const data: any = yield select(SelectRequestSuccess);
    const token: any = localStorage.getItem('token');
    console.log(token);
    const loginResp: any = yield fork(
      API.post(
        'template/lists',
        actions.cvSelectSuccess,
        actions.cvSelectFailed,
        data,
        token,
        'POST',
      ),
    );
    if (loginResp) {
      yield take(actions.cvSelectSuccess);
    }
  } catch (err) {
    yield put(actions.cvSelectFailed);
  }
}
function* CvGetTemplate() {
  try {
    const loginResp: any = yield fork(
      API.get(
        'template/lists',
        actions.cvGetSuccess,
        actions.cvGetFailed,
        '',
        '',
        'GET',
      ),
    );
    if (loginResp) {
      yield take(actions.cvGetSuccess);
    }
  } catch (err) {
    yield put(actions.cvGetFailed);
  }
}
export function* cVselectorSaga() {
  yield takeLatest(actions.cvGetRequest.type, CvGetTemplate);
  yield takeLatest(actions.cvSelectRequest.type, CvSelectRequest);
  // yield takeLatest(actions.someAction.type, doSomething);
}
