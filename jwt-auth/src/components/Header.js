import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Header = ({ logoutUser, setLogoutUser }) => {
  const [login, setLogin] = useState('');

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem('login');
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty('login')) {
      let value = localStorage.getItem('login');
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin('');
      }
    }
  };
  return (
    <div>
      <header style={{ marginTop: '20px' }}>
        {!logoutUser && login && login.userLogin ? (
          <Button style={{ width: '100px' }} variant="contained" color="secondary" onClick={logout}>
            Выйти
          </Button>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button style={{ width: '160px' }} variant="contained" color="secondary">
              Авторизоваться
            </Button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
