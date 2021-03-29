import React, { useEffect, useState } from 'react';
import s from './Modal.module.css';
import Toast from '../Toast/Toast';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import phonebookSelectors from '../../redux/phonebook/contacts-selectors';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import { CSSTransition } from 'react-transition-group';

export default function SimpleModal({ open, id, nameC, numberC, handleClose }) {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getAllContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [haveError, setHaveError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setName(nameC);
    setNumber(numberC);
  }, [nameC, numberC]);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const showToast = message => {
    setErrorMessage(message);
    setHaveError(true);
    setTimeout(() => {
      setHaveError(false);
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

      return;
    }

    dispatch(phonebookOperations.editContact(id, name, number));
    handleClose();
  };

  return (
    <div>
      <CSSTransition
        in={haveError}
        timeout={250}
        classNames="toast"
        unmountOnExit
      >
        <Toast message={errorMessage} />
      </CSSTransition>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={s.paper}>
          <form className={s.form} onSubmit={handleSubmit}>
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
            <div>
              <button type="submit" className={s.button}>
                Edit contact
              </button>
              <button type="button" className={s.button} onClick={handleClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
