import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import phonebookSelectors from '../../redux/phonebook/contacts-selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getVisibleContacts);
  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.length === 0 ? (
        <CSSTransition
          key={1}
          timeout={700}
          classNames="message-empty"
          unmountOnExit
        >
          <li>Contact list empty for now</li>
        </CSSTransition>
      ) : (
        contacts.map(({ name, number, id }) => {
          return (
            <CSSTransition key={id} appear={true} timeout={250} classNames={s}>
              <li className={s.listItem}>
                <span>
                  {name}: {number}
                </span>
                <button
                  type="button"
                  className={s.button}
                  onClick={() =>
                    dispatch(phonebookOperations.deleteContact(id))
                  }
                >
                  Delete contact
                </button>
              </li>
            </CSSTransition>
          );
        })
      )}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};
