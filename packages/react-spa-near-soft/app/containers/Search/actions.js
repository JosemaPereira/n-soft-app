import * as searchConstants from './constants';

//Reducer
export const setInputValueHandlerReducer = payload => ({
  type: searchConstants.SET_INPUT_VALUE_REDUCER,
  payload
});

//Saga
const setInputValueHandlerSaga = payload => ({
  type: searchConstants.SET_INPUT_VALUE_SAGA,
  payload
});

export const searchBindActions = { setInputValueHandlerSaga };
