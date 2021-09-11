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

export const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    await axios.post("/contacts", contact);
    dispatch(fetchContacts());
    dispatch(addContactSuccess());
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(fetchContacts());
    dispatch(deleteContactSuccess());
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
