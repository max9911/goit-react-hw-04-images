import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class GalItem extends Component {
  render() {
    const imgLink = this.props.imgWeb;
    const picClick = this.props.picClick;

    return (
      <li className={css.ImageGalleryItem} onClick={picClick}>
        <img
          id={this.props.id}
          src={imgLink}
          alt="pic"
          className={css.ImageGalleryItemImage}
        />
      </li>
    );
  }
}

export default GalItem;
