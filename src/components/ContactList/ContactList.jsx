import Contact from '../Contact/Contact';
import css from "./ContactList.module.css"
export default function ContactList({ array, onDelete }) {
  return (
    <ul className={css.contactList}>
      {array.map(item => {
        return (
          <li key={item.id} className={css.itemWraper}>
            <Contact item={item}
            onDelete ={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}
