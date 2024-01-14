import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');

  const onSubmit = word => {
    setSearch(word);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery word={search} />
    </div>
  );
};

export default App;
