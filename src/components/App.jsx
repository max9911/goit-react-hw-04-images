import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    search: '111',
  };

  onSubmit = word => {
    this.setState({
      search: word,
    });
  };
  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery word={this.state.search} />
      </div>
    );
  }
}
export default App;
