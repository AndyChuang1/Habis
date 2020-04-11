import React, { useState } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import PrivateRoute from './route/PrivateRoute';
import Home from './views/Home';

function App() {
  const [token, setToken] = useState(false);
  return (
    <div className='App'>
      <Switch>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute exact path='/' token={token}>
          <Home></Home>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
