import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, token, ...rest }) {
  return <Route {...rest}>{token ? children : <Redirect to='/login'></Redirect>}</Route>;
}

// function PrivateRoute(props) {
//   return (
//     <Route {...props}>{props.token ? props.children : <Redirect to='/login'></Redirect>}</Route>
//   );
// }

export default PrivateRoute;
