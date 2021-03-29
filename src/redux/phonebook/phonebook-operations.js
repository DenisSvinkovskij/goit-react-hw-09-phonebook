import axios from 'axios';
import {
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

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const editContact = (id, name, number) => dispatch => {
  dispatch(editContactRequest());
  const patchContact = { name, number };

  axios
    .patch(`/contacts/${id}`, patchContact)
    .then(({ data }) => {
      dispatch(editContactSuccess(data));
    })
    .catch(error => dispatch(editContactError(error.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

const operations = { fetchContacts, addContact, deleteContact, editContact };

export default operations;
