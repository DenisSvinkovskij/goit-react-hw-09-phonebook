import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import phonebookSelectors from '../../redux/phonebook/contacts-selectors';
import Modal from '../Modal/Modal';

export default function ContactList() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [nameC, setNameC] = useState();
  const [numberC, setNumberC] = useState();
  const [idC, setidC] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <div className={s.wrapperBtn}>
                  <button
                    type="button"
                    className={s.button}
                    onClick={() => {
                      setNameC(name);
                      setNumberC(number);
                      setidC(id);
                      handleOpen();
                    }}
                  >
                    Edit contact
                  </button>
                  <button
                    type="button"
                    className={s.button}
                    onClick={() =>
                      dispatch(phonebookOperations.deleteContact(id))
                    }
                  >
                    Delete contact
                  </button>
                </div>
              </li>
            </CSSTransition>
          );
        })
      )}
      <Modal
        open={open}
        handleClose={handleClose}
        nameC={nameC}
        numberC={numberC}
        id={idC}
      />
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
