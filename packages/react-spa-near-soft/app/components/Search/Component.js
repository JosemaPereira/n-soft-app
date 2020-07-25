import React from 'react';

const Search = ({ inputValue, actions: { setInputValueHandlerSaga } }) => (
  <>
    <label htmlFor="search" />
    <input
      type="text"
      value={inputValue}
      name="search"
      onChange={e => setInputValueHandlerSaga(e.target.value)}
    />
  </>
);

export default Search;
