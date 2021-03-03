import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth';
import s from './LoginPage.module.css';

export default function LoginPage(params) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.loginUser({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h2>Log In</h2>
      <form className={s.form} onSubmit={handleFormSubmit}>
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
          Enter
        </button>
      </form>
    </div>
  );
}
