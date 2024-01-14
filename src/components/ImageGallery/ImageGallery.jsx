import { useEffect, useState } from 'react';
import GalItem from 'components/ImageGalleryItem/ImageGalleryItem';
import BtnMore from '../Button/btn';
import { getPics } from 'api/getPic';
import { ThreeCircles } from 'react-loader-spinner';
import css from './ImageGallery.module.css';
import ModalW from 'components/Modal/modal';

const ImageGallery = ({ word }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalPic, setModalPic] = useState('');
  const [modalW, setModalW] = useState(false);
  const [bntShow, setBtnShow] = useState(true);
  const [totalHits, setTotalHits] = useState(null);

  const getGal = async (word, page) => {
    try {
      console.log(page);
      setLoading(true);
      setBtnShow(false);

      const resp = await getPics(word, page);

      const obj = resp.data.hits;
      setTotalHits(resp.data.totalHits);
      setData(prev => [...prev, ...obj]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setBtnShow(true);
    }
  };
  useEffect(() => {
    // console.log('useef1');
    setPage(1);
    setData([]);
    word && getGal(word, page);
  }, [word]);

  useEffect(() => {
    // console.log('useef2');
    word && getGal(word, page);
  }, [page]);

  const btnClick = () => {
    setPage(prev => prev + 1);
  };

  const picClick = evt => {
    const picId = evt.target.id;
    const element = data.find(el => el.id.toString() === picId);
    setModalPic(element.largeImageURL);
    setModalW(true);
  };
  const closeW = evt => {
    if (evt.code === 'Escape' || evt.type === 'click') {
      setModalW(false);
    }
  };

  return (
    <>
      <ul className={css.ImageGallery}>
        {modalW && <ModalW closeW={closeW} url={modalPic} />}
        {data.length > 0 &&
          data.map(el => (
            <GalItem
              key={el.id}
              id={el.id}
              imgWeb={el.webformatURL}
              picClick={picClick}
            />
          ))}
        {loading && (
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
        {data.length > 0 && bntShow && totalHits / page / 12 > 1 ? (
          <BtnMore click={btnClick} />
        ) : (
          ''
        )}
      </ul>
    </>
  );
};

export default ImageGallery;
