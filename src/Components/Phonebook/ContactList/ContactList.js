import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { createSelector } from "@reduxjs/toolkit";
import styles from "./style.module.css";
import { useEffect } from "react";
import {deleteContact, fetchContacts} from "../../../redux/contacts/contacts-operations";

const selectContacts = createSelector(
  (state) => state.contacts.items,
  (contacts) => contacts
);

const ContactList = () => {
  const dispatch = useDispatch();
  const onRemoveContact = (id) => dispatch(deleteContact(id));
  const contacts = useSelector(selectContacts);
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    dispatch(fetchContacts(filter.name));
  }, [dispatch, filter.name]);

  return (
    <ul className={styles.TaskList}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.TaskList_item} key={id}>
          {name + " : " + number}
          {
            <button
              className={styles.TaskList_button}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
