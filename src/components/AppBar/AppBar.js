import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/Auth';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLogedIn = useSelector(authSelectors.getIsLogedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
