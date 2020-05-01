import React, { useState } from 'react';
import Alert from './Alert';

const Search = ({searchUser}) => {
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert(true);
    } else {
      searchUser(text);
      setAlert(false);
    }
  };

  const onChangeText = (e) => {
    setText(e.target.value)
  };

  return (
    <>
      {alert && <Alert />}
      <h1 className={tailwind.title}>Search</h1>
      <form onSubmit={handleSumbit}>
        <input
          type='text'
          name='text'
          className={tailwind.searchInput}
          onChange={onChangeText}
          value={text}
        />
        <input
          type='submit'
          value='Search'
          className={tailwind.button}
        />
      </form>
    </>
  );
};

const tailwind = {
  title: 'text-2xl mb-2',
  searchInput: 'w-full h-10 border-2 mb-6',
  button: 'w-full h-10 border-2 bg-black text-white'
}

export default Search;
