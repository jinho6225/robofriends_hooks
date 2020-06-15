import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="serach robots"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
