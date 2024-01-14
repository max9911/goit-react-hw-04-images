import css from './btn.module.css';

export default function BtnMore({ click }) {
  return (
    <button onClick={click} className={css.Button}>
      load more
    </button>
  );
}
