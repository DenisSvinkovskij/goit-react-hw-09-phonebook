import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import phonebookSelectors from '../../redux/phonebook/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(phonebookSelectors.getFilter);
  const items = useSelector(phonebookSelectors.getAllContacts);
  return (
    <CSSTransition
      in={items.length > 0}
      timeout={500}
      classNames="filter"
      unmountOnExit
    >
      <div>
        <h3>Find contact by name</h3>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </CSSTransition>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
};
