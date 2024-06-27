import css from "./SearchBox.module.css"
import { useId, useState } from 'react';


export default function SearchBox({value, onFilter}) {
  const searchBoxId = useId();
// const[filter, setFilter] = useState("")
const handleFilter =(event) =>{
    onFilter(event.target.value)

  }
  return (
    <div className={css.searchBoxWraper}>
      <label htmlFor={searchBoxId}>Search for Contacts</label>
      <input className={css.serchBoxInput} type="text" name="searchBoxId" id={searchBoxId} value ={value} onChange ={handleFilter}/>
    </div>
  );
}
