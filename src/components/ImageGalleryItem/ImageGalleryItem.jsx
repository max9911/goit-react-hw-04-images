import css from './ImageGalleryItem.module.css';

const GalItem = ({ imgWeb, picClick, id }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={picClick}>
      <img
        key={id}
        id={id}
        src={imgWeb}
        alt="pic"
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};

export default GalItem;
