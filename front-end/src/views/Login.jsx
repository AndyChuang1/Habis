import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Login({ setToken }) {
  const [account, setAccount] = useState('');
  const [pwd, setPwd] = useState('');
  const history = useHistory();

  const handleSubmit = evt => {
    evt.preventDefault();
    if ((account === 'admin') & (pwd === 'admin')) {
      setToken(true);
      history.push('/');
    } else {
      alert('Login failed, Please check account or password!!');
    }
  };

  return (
    <div id='login'>
      <h1>Login page</h1>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Box className='account'>
          <TextField
            id='outlined-search'
            label='Account'
            type='text'
            variant='outlined'
            value={account}
            onChange={e => setAccount(e.target.value)}
          />
        </Box>
        <Box className='password' mt={2} mb={2}>
          <TextField
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='outlined'
            value={pwd}
            onChange={e => setPwd(e.target.value)}
          />
        </Box>
        <Button variant='outlined' type='submit'>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
