import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default ({ isOpen }) => {
  return (
    <Menu
      isOpen={window.innerWidth > 768}
      noOverlay={true}
      disableCloseOnEsc={true}
      pageWrapId={'page-wrap'}
    >
      <a className="menu-item" href="/">
        Pedidos
      </a>

      <a className="menu-item" href="/laravel">
        Perfil
      </a>

      <a
        style={{ verticalAlign: 'bottom' }}
        className="menu-item"
        href="/laravel"
      >
        Sair
      </a>
    </Menu>
  );
};
