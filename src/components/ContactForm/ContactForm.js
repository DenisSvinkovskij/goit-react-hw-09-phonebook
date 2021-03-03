import React, { useState } from 'react';
import s from './ContactForm.module.css';
import Toast from '../Toast/Toast';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import phonebookSelectors from '../../redux/phonebook/contacts-selectors';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';

export default function ContactForm(params) {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getAllContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [haveError, setHaveError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const showToast = message => {
    setHaveError(prev => ({
      haveError: !prev,
    }));
    setErrorMessage(message);
    setTimeout(() => {
      setHaveError(prev => ({
        haveError: !prev,
      }));
    }, 1500);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '' || number === '') {
      showToast("Name or number can't be empty string");

      return;
    }

    if (contacts.find(item => item.name === name)) {
      showToast(`${name} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(phonebookOperations.addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <>
      <CSSTransition
        in={haveError}
        timeout={250}
        classNames="toast"
        unmountOnExit
      >
        <Toast message={errorMessage} />
      </CSSTransition>

      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="text"
            name="number"
            value={number}
            onChange={handleChangeNumber}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
