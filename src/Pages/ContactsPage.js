import React from 'react';
import ContactList from "../Components/Phonebook/ContactList";
import Filter from "../Components/Phonebook/Filter";
import Form from "../Components/Phonebook/Form";
import s from './styles.module.css'

export default function ContactsPage() {
  return (
      <>
        <div className={s.pagebox}>
          <h1 className={s.title}>Phonebook</h1>
          <Form />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
  );
}

