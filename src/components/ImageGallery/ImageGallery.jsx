import { Component } from 'react';
import GalItem from 'components/ImageGalleryItem/ImageGalleryItem';
import BtnMore from '../Button/btn';
import { getPics } from 'api/getPic';
import { ThreeCircles } from 'react-loader-spinner';
import css from './ImageGallery.module.css';
import ModalW from 'components/Modal/modal';

class ImageGallery extends Component {
  state = {
    page: 1,
    data: [],
    loading: false,
    modalPic: '',
    modalW: false,
    bntShow: true,
    totalHits: null,
  };

  componentDidUpdate(prevP, prevS) {
    if (this.props.word !== prevP.word) {
      this.setState({ page: 1, data: [] });
      this.getGal();
    }
    if (this.state.page !== prevS.page) {
      this.getGal();
    }
  }

  getGal = async () => {
    try {
      this.setState({ loading: true, bntShow: false });
      const resp = await getPics(this.props.word, this.state.page);
      const obj = resp.data.hits;
      this.setState({ totalHits: resp.data.totalHits });
      this.setState(prev => ({ data: [...prev.data, ...obj] }));
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false, bntShow: true });
    }
  };

  btnClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  picClick = evt => {
    const picId = evt.target.id;

    const element = this.state.data.find(el => el.id.toString() === picId);

    this.setState({
      modalPic: element.largeImageURL,
      modalW: true,
    });
  };
  closeW = evt => {
    if (evt.code === 'Escape' || evt.type === 'click') {
      this.setState({
        modalW: false,
      });
    }
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <ul className={css.ImageGallery}>
          {this.state.modalW && (
            <ModalW closeW={this.closeW} url={this.state.modalPic} />
          )}
          {data.length > 0 &&
            data.map(el => (
              <GalItem
                key={el.id}
                id={el.id}
                imgWeb={el.webformatURL}
                picClick={this.picClick}
              />
            ))}
          {this.state.loading && (
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
          {data.length > 0 &&
          this.state.bntShow &&
          this.state.totalHits / this.state.page / 12 > 1 ? (
            <BtnMore click={this.btnClick} />
          ) : (
            ''
          )}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
