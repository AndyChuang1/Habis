import React, { useState } from 'react';
// import { spacing } from '@material-ui/system';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import PrivateRoute from './route/PrivateRoute';
import Home from './views/Home';
import Search from './views/Search';
import Bill from './views/Bill';
import Profile from './views/Profile';

function App() {
  const [token, setToken] = useState(false);
  return (
    <div className='App'>
      <Switch>
        <Route path='/login'>
          <Login setToken={setToken}></Login>
        </Route>
        <PrivateRoute exact path='/' token={token}>
          <Home></Home>
        </PrivateRoute>
        <PrivateRoute path='/search' token={token}>
          <Search></Search>
        </PrivateRoute>
        <PrivateRoute path='/bill' token={token}>
          <Bill></Bill>
        </PrivateRoute>
        <PrivateRoute path='/profile' token={token}>
          <Profile></Profile>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;