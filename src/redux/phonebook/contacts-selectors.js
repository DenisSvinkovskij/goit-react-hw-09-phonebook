import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;
const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const selectors = { getLoading, getAllContacts, getFilter, getVisibleContacts };

export default selectors;
