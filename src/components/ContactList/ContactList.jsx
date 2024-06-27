import Contact from '../Contact/Contact';
import css from "./ContactList.module.css"
export default function ContactList({ array }) {
  return (
    <ul className={css.contactList}>
      {array.map(item => {
        return (
          <li key={item.id} className={css.itemWraper}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
}
