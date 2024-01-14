import css from './modal.module.css';
import { useEffect } from 'react';

const ModalW = ({ closeW, url }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeW);
    return () => {
      document.removeEventListener('keydown', closeW);
    };
  }, [closeW]);

  return (
    <div className={css.Overlay} onClick={closeW}>
      <div className={css.Modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
};
export default ModalW;
