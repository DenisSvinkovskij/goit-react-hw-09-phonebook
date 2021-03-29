import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  changeFilter,
  addContactSuccess,
  deleteContactSuccess,
  fetchContactsSuccess,
  addContactRequest,
  deleteContactRequest,
  fetchContactsRequest,
  addContactError,
  deleteContactError,
  fetchContactsError,
  editContactRequest,
  editContactSuccess,
  editContactError,
} from './phonebook-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload.reverse(),
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [editContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [editContactRequest]: () => true,
  [editContactSuccess]: () => false,
  [editContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
