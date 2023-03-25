import { useState, useEffect } from 'react';
import InputForm from './InputForm/InputForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(newContact.name + 'is already to contact');
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
  };

  const filterHandler = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <InputForm onSubmit={addContact} />
      {contacts.length === 0 ? (
        <p>There are no contacts</p>
      ) : (
        <>
          <Filter onInputHandler={filterHandler}></Filter>
          <ContactList
            deleteContact={deleteContact}
            filteredContacts={showFilteredContacts()}
          ></ContactList>
        </>
      )}
    </div>
  );
};

export default App;
