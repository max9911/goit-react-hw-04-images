import css from './modal.module.css';
import { Component } from 'react';

export default class ModalW extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.closeW);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.closeW);
  }

  render() {
    return (
      <div className={css.Overlay} onClick={this.props.closeW}>
        <div className={css.Modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}
