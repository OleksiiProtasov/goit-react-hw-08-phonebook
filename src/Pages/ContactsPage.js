import React from 'react';
// import Container from '../components/Container';
import ContactList from "../Components/Phonebook/ContactList";
import Filter from "../Components/Phonebook/Filter";
import Form from "../Components/Phonebook/Form";

export default function ContactsPage() {
  return (
      <>
        <div>
          <h1>Phonebook</h1>
          <Form />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
  );
}

