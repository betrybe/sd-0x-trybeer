import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';

import { signOutRequest } from '../../../store/modules/auth/actions';

export default (props) => {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOutRequest());
  }

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

      <Link className="menu-item" to="/meu-perfil">
        Perfil
      </Link>

      <button
        style={{ verticalAlign: 'bottom' }}
        className="menu-item"
        onClick={handleSignOut}
      >
        Sair
      </button>
    </Menu>
  );
};
