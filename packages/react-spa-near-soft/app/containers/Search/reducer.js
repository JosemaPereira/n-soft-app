import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as searchConstants from './constants';

const initialState = { inputValue: '' };

const defaultHandler = (state, action) => state;

const setInputValue = (state, { payload }) =>
  produce(state, draft => {
    draft.inputValue = payload;
  });

export const searchReducer = produce(
  handleActions(
    {
      [searchConstants.SET_INPUT_VALUE_REDUCER]: setInputValue
    },
    initialState
  )
);
