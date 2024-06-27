import css from './SearchBox.module.css';
import { useId } from 'react';

export default function SearchBox({ value, onFilter }) {
  const searchBoxId = useId();

  const handleFilter = event => {
    onFilter(event.target.value);
  };
  return (
    <div className={css.searchBoxWraper}>
      <label className={css.searchBoxLabel} htmlFor={searchBoxId}>
        Find contact by name
      </label>
      <input
        className={css.serchBoxInput}
        type="text"
        name="searchBoxId"
        id={searchBoxId}
        value={value}
        onChange={handleFilter}
      />
    </div>
  );
}
