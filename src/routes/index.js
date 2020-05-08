import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Orders from '../pages/Admin/Orders';
import Products from '../pages/Client/Products';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/admin/pedidos" component={Orders} isPrivate />
      <Route path="/produtos" component={Products} isPrivate />
    </Switch>
  );
}
