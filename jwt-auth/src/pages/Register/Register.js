import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import './styles/css/index.min.css';
import axiox from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },

    // username: {
    //   [theme.breakpoints.down('sm')]: {
    //     minWidth: '40px',
    //   },
    // },
  },
}));

const Register = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let history = useHistory();

  const register = (e) => {
    e.preventDefault();
    axiox
      .post('http://localhost:5000/api/auth/register', {
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
      <h2>Страница регистрации</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className={classes.root} noValidate autoComplete="off" onSubmit={register}>
        <TextField
          className="username__reg"
          id="username"
          label="Имя пользователя"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          className="password__reg"
          id="password"
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          style={{ width: '205px', backgroundColor: '#4dd599' }}
          variant="contained"
          color="primary"
          type="submit">
          Зарегистрироваться
        </Button>
      </form>
      <p>
        Если у вас уже есть аккаунт, пожалуйста, <Link to="/login">Авторизуйтесь</Link>
      </p>
    </div>
  );
};

export default Register;
