import initialContacts from "../../../contacts.json"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"
import ContactForm from "../ContactForm/ContactForm"
import { useState } from 'react'

import './App.css'

function App() {
  const[filter, setFilter] = useState("")
  const [contacts, setContacts] = useState(initialContacts)
  console.log(filter);

  const filteredContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase())
  })
 
  return (
    <>
    <ContactForm />
    <SearchBox value={filter} onFilter ={setFilter}/>
    <ContactList array = {filteredContacts} />
    </>
  )
}

export default App
