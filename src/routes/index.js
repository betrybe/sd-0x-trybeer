import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Orders from '../pages/admin/Orders';
import OrderDetail from '../pages/admin/OrderDetail';
import AdminProfile from '../pages/admin/Profile';

import Products from '../pages/client/Products';
import Cart from '../pages/client/Cart';
import MyOrders from '../pages/client/Orders';
import Order from '../pages/client/Order';
import Profile from '../pages/client/Profile';

export default function Routes() {
  return (
    <Switch>
      {/* Rotas admin */}
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
      <Route
        path="/admin/perfil"
        component={AdminProfile}
        title="Perfil"
        isPrivate
      />

      {/* Rotas do cliente */}
      <Route path="/produtos" component={Products} title="Produtos" isPrivate />
      <Route path="/meu-perfil" component={Profile} title="Perfil" isPrivate />
      <Route path="/checkout" component={Cart} title="Carrinho" isPrivate />
      <Route
        path="/meus-pedidos"
        component={MyOrders}
        title="Meus pedidos"
        isPrivate
      />
      <Route
        path="/pedido/:id"
        component={Order}
        title="Meus pedidos"
        isPrivate
      />
    </Switch>
  );
}
