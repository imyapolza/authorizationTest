import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import axiox from 'axios';

import './styles/css/index.min.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
}));

const Login = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let history = useHistory();

  const login = (e) => {
    e.preventDefault();
    axiox
      .post('http://localhost:5000/api/auth/login', {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          'login',
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          }),
        );
        setError('');
        setEmail('');
        setPassword('');
        setLogoutUser(false);
        history.push('/');
      })

      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div style={{ marginTop: '100px' }}>
      <h2>Войдите в аккаунт</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className={classes.root} noValidate autoComplete="off" onSubmit={login}>
        <TextField
          className="username__log"
          id="username"
          label="Имя пользователя"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          className="password__log"
          id="password"
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          style={{ width: '100px', backgroundColor: '#4dd599' }}
          variant="contained"
          color="primary"
          type="submit">
          Войти
        </Button>
      </form>
      <p className="login__text">
        Если у вас нет аккаунта, пожалуйста, <Link to="/register">Зарегистрируйтесь</Link>
      </p>
    </div>
  );
};

export default Login;
