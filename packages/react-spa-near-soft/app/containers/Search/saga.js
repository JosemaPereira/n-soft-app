import { put, takeLatest, select, call } from 'redux-saga/effects';
import {
  setInputValueHandlerReducer,
  setSearchContentHandlerReducer
} from './actions';
import * as searchConstants from './constants';
import * as searchSelectors from './selectors';
import { getAllIssues } from '../../services';

function* searchAllIssues() {
  try {
    const data = yield call(getAllIssues);

    yield put(setSearchContentHandlerReducer(data));
  } catch (ex) {
    console.log(ex);
  }
}

function* setInputHandler({ payload }) {
  yield put(setInputValueHandlerReducer(payload));
}

function* getSearchHandler() {
  try {
    const inputValue = yield select(searchSelectors.inputValueSelector);
    const data = yield call(getAllIssues, inputValue);
    yield put(setSearchContentHandlerReducer(data));
  } catch (ex) {
    console.log(ex);
  }
}

export function* searchSaga() {
  yield takeLatest(searchConstants.SET_INPUT_VALUE_SAGA, setInputHandler);
  yield takeLatest(searchConstants.GET_SEARCH_SAGA, getSearchHandler);
  yield call(searchAllIssues);
}
