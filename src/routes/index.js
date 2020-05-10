import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Orders from '../pages/Admin/Orders';
import OrderDetail from '../pages/Admin/OrderDetail';

import Products from '../pages/Client/Products';
import Cart from '../pages/Client/Cart';
import MyOrders from '../pages/Client/Orders';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route
        path="/admin/pedidos"
        title="Pedidos pendentes"
        component={Orders}
        isPrivate
      />
      <Route
        path="/admin/pedido/:id"
        component={OrderDetail}
        title="Pedido"
        isPrivate
      />

      <Route path="/produtos" component={Products} title="Produtos" isPrivate />
      <Route path="/meu-perfil" component={Profile} title="Perfil" isPrivate />
      <Route path="/checkout" component={Cart} title="Carrinho" isPrivate />
      <Route
        path="/meus-pedidos"
        component={MyOrders}
        title="Meus pedidos"
        isPrivate
      />
    </Switch>
  );
}
