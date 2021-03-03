import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import { authOperations } from './redux/Auth';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loader/Loader';

const HomePage = lazy(() => import('./views/Home-page/HomePage'));
const LoginPage = lazy(() => import('./views/Login-page/LoginPage'));
const Phonebook = lazy(() => import('./views/Phonebook-page/PhonebookPage.js'));
const RegisterPage = lazy(() =>
  import('./views/Register-page/RegisterPage.js'),
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Suspense fallback={<Loading />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/phonebook">
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/registration" restricted redirectTo="/phonebook">
            <RegisterPage />
          </PublicRoute>
          <PrivateRoute path="/phonebook" redirectTo="/login">
            <Phonebook />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}
