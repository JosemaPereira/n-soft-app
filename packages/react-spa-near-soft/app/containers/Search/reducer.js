import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as searchConstants from './constants';

const initialState = { inputValue: '', content: [] };

const setInputValue = (state, { payload }) =>
  produce(state, draft => {
    draft.inputValue = payload;
  });

const setSearchContent = (state, { payload }) =>
  produce(state, draft => {
    draft.content = payload;
  });

export const searchReducer = produce(
  handleActions(
    {
      [searchConstants.SET_INPUT_VALUE_REDUCER]: setInputValue,
      [searchConstants.SET_SEARCH_CONTENT_REDUCER]: setSearchContent
    },
    initialState
  )
);
