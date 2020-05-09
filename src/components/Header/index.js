import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Title } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Trybeer"></img>
      </Link>

      <Title>Meus pedidos</Title>

      <span></span>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
