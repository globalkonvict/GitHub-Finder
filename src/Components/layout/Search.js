import React, { Component } from 'react';
import Alert from './Alert';

export class Search extends Component {
  state = {
    text: '',
    alert: false,
  };

  handleSumbit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.setState({ alert: true });
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ alert: false, text: '' });
    }
  };

  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.alert && <Alert />}
        <h1 className='text-2xl mb-2'>Search</h1>
        <form onSubmit={this.handleSumbit}>
          <input
            type='text'
            name='text'
            className='w-full h-10 border-2 mb-6'
            onChange={this.onChangeText}
            value={this.state.text}
          />
          <input
            type='submit'
            value='Search'
            className='w-full h-10 border-2 bg-black text-white'
          />
        </form>
      </div>
    );
  }
}

export default Search;
