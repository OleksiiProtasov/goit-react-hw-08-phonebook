import styles from "./style.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { addContact } from "../../../redux/contacts/contacts-operations";

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isExitingName = contacts.find(
      (contact) => contact.name.toUpperCase() === name.toUpperCase()
    );

    if (isExitingName) {
      alert(`${isExitingName.name} is already in contacts.`);
      return;
    }

    if (name.length === 0 || number.length === 0) {
      alert("Fields must be filled!");
      return;
    }

    dispatch(addContact({ id: shortid.generate(), name, number }));

    setName("");
    setNumber("");
  };

  return (
    <form className={styles.TaskEditor} onSubmit={handleSubmit}>
      <label className={styles.TaskEditor_label}>
        Name
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.TaskEditor_label}>
        Number
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.TaskEditor_button} type="submit">
        Add contact
      </button>
    </form>
  );
}
