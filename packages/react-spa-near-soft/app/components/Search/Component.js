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
          <div className="title">
            {item.title} <span>State: {item.state}</span>
          </div>
          {_.map(item.labels, label => (
            <div
              className="label"
              key={_.uniqueId()}
              style={{ backgroundColor: `#${label.color}` }}
            >
              {label.name}
            </div>
          ))}
          <span className="info">
            #{item.number} opened at {item.created_at} by {item.user.login}
          </span>
        </div>
      ))}
    </div>
  </>
);

export default Search;
