import React from 'react';
import _ from 'lodash';
const Search = ({
  inputValue,
  content,
  actions: { setInputValueHandlerSaga, getSearchHandlerSaga }
}) => (
  <>
    <label htmlFor="search">Filtrar issues</label>
    <input
      type="text"
      value={inputValue}
      name="search"
      onChange={e => {
        if (e.key !== 'Enter') {
          setInputValueHandlerSaga(e.target.value);
        }
      }}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          getSearchHandlerSaga();
        }
      }}
    />

    <div className="issues-list">
      {_.map(content.items, item => (
        <div className="item" key={_.uniqueId()}>
          <p>
            {item.title} {item.state}
          </p>
          {_.map(item.labels, label => (
            <span key={_.uniqueId()}>{label.name}</span>
          ))}
          <p>
            #{item.number} opened at {item.created_at} by {item.user.login}
          </p>
        </div>
      ))}
    </div>
  </>
);

export default Search;
