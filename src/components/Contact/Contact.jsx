import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ item, onDelete }) {
  const { id, name, number } = item;

  const handleClick = event => {
    onDelete(event.target.value);
  };

  return (
    <>
      <div>
        <div className={css.userWraper}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={css.phoneWraper}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={handleClick} value={id}>
        Delete
      </button>
    </>
  );
}
