import { put, takeLatest } from 'redux-saga/effects';
import { setInputValueHandlerReducer } from './actions';
import * as searchConstants from './constants';

function* setInputHandler({ payload }) {
  yield put(setInputValueHandlerReducer(payload));
}

export function* searchSaga() {
  yield takeLatest(searchConstants.SET_INPUT_VALUE_SAGA, setInputHandler);
}
