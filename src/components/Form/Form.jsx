import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.target.elements.search.value);
    evt.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
