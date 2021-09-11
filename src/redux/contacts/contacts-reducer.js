import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsError]: () => false,
  [fetchContactsSuccess]: () => false,
});

const adding = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

const removeContact = createReducer(false, {
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer(
  {},
  {
    [changeFilter]: (state, { payload }) => ({
      ...state,
      [payload.name]: payload.value,
    }),
  }
);

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  adding,
  error,
  removeContact,
});
