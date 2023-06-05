import React, { Component } from 'react';
import { SearchBarStyled } from './SearchBar.styled';
import { toast } from 'react-toastify';

export default class SearchBar extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ input: value.toLowerCase() });
  };
  submitHandler = e => {
    e.preventDefault();
    if (this.state.input.trim() === '') {
      return toast.warn('Please enter non-empty search query!');
    }
    this.props.onSubmit(this.state);
    this.setState(prevState => ({ ...prevState, input: '' }));
  };

  render() {
    return (
      <SearchBarStyled>
        <form className="form" onSubmit={this.submitHandler}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.input}
          />
        </form>
      </SearchBarStyled>
    );
  }
}
