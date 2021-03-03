import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/Auth';
import s from './Navigation.module.css';

function Navigation() {
  const isLogedIn = useSelector(authSelectors.getIsLogedIn);
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      {isLogedIn && (
        <NavLink
          exact
          to="/phonebook"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

export default React.memo(Navigation);
