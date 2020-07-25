import * as searchConstants from './constants';

//Reducer
export const setInputValueHandlerReducer = payload => ({
  type: searchConstants.SET_INPUT_VALUE_REDUCER,
  payload
});

export const setSearchContentHandlerReducer = payload => ({
  type: searchConstants.SET_SEARCH_CONTENT_REDUCER,
  payload
});

//Saga
const setInputValueHandlerSaga = payload => ({
  type: searchConstants.SET_INPUT_VALUE_SAGA,
  payload
});

const getSearchHandlerSaga = () => ({
  type: searchConstants.GET_SEARCH_SAGA
});

export const searchBindActions = {
  setInputValueHandlerSaga,
  getSearchHandlerSaga
};
