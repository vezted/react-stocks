import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  clearSearch,
  cursor,
  handleSearchChange,
  handleQuoteChange,
  handleSearchKeyDowns,
  handleBlur,
  searchValue,
  searchResults,
}) => {
  return (
    <div className="search-container">
      <form className="searchForm">
        <div className="searchForm__inputs">
          <input
            type="text"
            className="searchForm__text"
            placeholder="Search by symbol or name"
            value={searchValue}
            onChange={e => handleSearchChange(e)}
            onKeyDown={handleSearchKeyDowns}
            onBlur={clearSearch}
          />
          {searchValue !== '' && (
            <button
              className="searchForm__clear"
              onClick={e => {
                e.preventDefault();
                clearSearch();
              }}
            >
              clear
            </button>
          )}
        </div>
        {searchResults != null && searchValue !== '' && (
          <div className="searchForm__results">
            {searchResults.map((result, i) => {
              const { symbol, name } = result;
              return (
                <ul
                  className={
                    cursor === i
                      ? 'searchForm__result active'
                      : 'searchForm__result'
                  }
                  key={symbol}
                  onMouseDown={() => {
                    handleQuoteChange(symbol);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <li className="searchForm__resultSymbol">{symbol}</li>
                  <li className="searchForm__resultName">{name}</li>
                </ul>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  cursor: PropTypes.number.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleQuoteChange: PropTypes.func.isRequired,
  handleSearchKeyDowns: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchResults: PropTypes.array,
};

export default Search;
