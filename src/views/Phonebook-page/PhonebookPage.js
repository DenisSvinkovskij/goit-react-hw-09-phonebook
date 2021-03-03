import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phonebookSelectors from '../../redux/phonebook/contacts-selectors';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { CSSTransition } from 'react-transition-group';
import Loader from '../../components/Loader/Loader';
import s from './Phonebook.module.css';

export default function Phonebook(params) {
  const dispatch = useDispatch();
  const isLoading = useSelector(phonebookSelectors.getLoading);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.App}>
      {isLoading && <Loader />}

      <div className={s.Container}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title"
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        <h1>Contacts</h1>

        <Filter />

        <ContactList />
      </div>
    </div>
  );
}
