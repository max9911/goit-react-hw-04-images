import css from './Searchbar.module.css';
import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchWord, setSearchWord] = useState('');
  const submit = evt => {
    evt.preventDefault();
    onSubmit(searchWord);
    setSearchWord('');
  };

  const inputChange = evt => {
    const { value } = evt.target;
    setSearchWord(value);
  };

  return (
    <>
      <header className={css.searchbar}>
        <form onSubmit={submit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            value={searchWord}
            onChange={inputChange}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};

export default Searchbar;
