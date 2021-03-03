import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/Auth';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <span className={s.name}>Welcome, {name}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.userLogout())}
      >
        Logout
      </button>
    </div>
  );
}
