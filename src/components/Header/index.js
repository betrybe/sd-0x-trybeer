import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container, Title } from './styles';
import MenuSwitcher from '../MenuSwitcher';

export default function Header({ toggleMenu, title }) {
  return (
    <>
      <Container>
        <div>
          <MenuSwitcher toggleMenu={toggleMenu} />
          <Link to="/">
            <img src={logo} alt="Trybeer"></img>
          </Link>
        </div>

        <Title>{title}</Title>

        <span></span>
      </Container>
    </>
  );
}
