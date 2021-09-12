import axios from "axios";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = () => async (dispatch, getState) => {
  dispatch(fetchContactsRequest());

  try {
    const { contacts } = getState();
    const params = {};
    if (contacts.filter.name) params["name_like"] = `^${contacts.filter.name}`;

    const { data } = await axios.get(`/contacts`, { params });

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact = (contact) => async (dispatch, getState) => {
  dispatch(addContactRequest());

  const { contacts } = getState();

  console.log('lloo')

  try {
    await axios.post("/contacts", contact);
    dispatch(addContactSuccess(
        [...contacts.items, contact]
    ));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = (id) => async (dispatch, getState) => {
  dispatch(deleteContactRequest());

  const { contacts } = getState();

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(contacts.items.filter(contact => contact.id !== id)));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
