import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth';
import s from './RegisterPage.module.css';

export default function RegisterPage(params) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeName = ({ target }) => {
    setName(target.value);
  };
  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.registrationUser({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h2>Registration</h2>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <label className={s.formLabel}>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChangeName}
            value={name}
            className={s.formInput}
          />
        </label>
        <label className={s.formLabel}>
          Email
          <input
            type="email"
            name="email"
            onChange={handleChangeEmail}
            value={email}
            className={s.formInput}
          />
        </label>
        <label className={s.formLabel}>
          Password
          <input
            type="password"
            name="password"
            onChange={handleChangePassword}
            value={password}
            className={s.formInput}
          />
        </label>
        <button type="submit" className={s.formButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
