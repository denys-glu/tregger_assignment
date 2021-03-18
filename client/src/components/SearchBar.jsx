import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
      <form onSubmit={onSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-12 col-sm-9 col-md-9">
            <input placeholder="Search:" value={term} onChange={e => setTerm(e.target.value)} type="text" id="searchBar" className="form-control" />
          </div>
          <div className="col-12 col-sm-3 col-md-3 mt-2 mt-sm-0">
            <button typy="submit" className="btn btn-success btn-block">Search</button>
          </div>
        </div>
      </form>
  )
};

export default SearchBar;
