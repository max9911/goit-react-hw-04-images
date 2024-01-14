import css from './Searchbar.module.css';
import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchWord: '',
  };
  submit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.searchWord);
    this.setState({
      searchWord: '',
    });
  };
  inputChange = evt => {
    const { value } = evt.target;

    this.setState({
      searchWord: value,
    });
  };
  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form onSubmit={this.submit} className={css.form}>
            <button type="submit" className={css.button}>
              <span className={css.buttonLabel}>Search</span>
            </button>

            <input
              value={this.state.searchWord}
              onChange={this.inputChange}
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
  }
}
