import React, { useState } from 'react';
import { SearchBarStyled } from './SearchBar.styled';
import { toast } from 'react-toastify';

const SearchBar = props => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setInput(value);
  };
  const submitHandler = e => {
    e.preventDefault();
    if (input.trim() === '') {
      return toast.warn('Please enter a non-empty search query!');
    }
    props.onSubmit(input.trim());
    setInput('');
  };

  return (
    <SearchBarStyled>
      <form className="form" onSubmit={submitHandler}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={input}
        />
      </form>
    </SearchBarStyled>
  );
};

export default SearchBar;
