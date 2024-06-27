import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from "./Contact.module.css"

export default function Contact({ item }) {
  const { name, number } = item;

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
      <button type="button">Delete</button>
    </>
  );
}
