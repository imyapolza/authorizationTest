import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../pages/Main/index.jsx';

const Home = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem('login'));

  const userNotLogin = () => (
    <>
      <h2>Упс, вы не авторизованы</h2>
      <h3>
        Если у вас уже есть аккаунт, <Link to="/login">Авторизуйтесь</Link>
      </h3>
      <h3>
        Если у вас нет аккаунта, <Link to="/register">Зарегистрируйтесь</Link>
      </h3>
    </>
  );
  return (
    <div style={{ marginTop: '100px' }}>
      {isLoginTrue && isLoginTrue.userLogin ? <Main /> : <>{userNotLogin()}</>}
    </div>
  );
};

export default Home;
