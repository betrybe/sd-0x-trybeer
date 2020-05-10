import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';

import { signOutRequest } from '../../../store/modules/auth/actions';

export default (props) => {
  const { admin } = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOutRequest());
  }

  return (
    <Menu
      {...props}
      customBurgerIcon={false}
      // isOpen={window.innerWidth > 768}
      noOverlay={true}
      disableCloseOnEsc={true}
      pageWrapId={'page-wrap'}
    >
      {admin ? (
        <>
          <Link className="menu-item bm-item" to="/admin/pedidos">
            Pedidos
          </Link>

          <Link className="menu-item bm-item" to="/meu-perfil">
            Perfil
          </Link>
        </>
      ) : (
        <>
          <Link className="menu-item bm-item" to="/produtos">
            Produtos
          </Link>
          <Link className="menu-item bm-item" to="/meus-pedidos">
            Meus pedidos
          </Link>
          <Link className="menu-item bm-item" to="">
            Meu perfil
          </Link>
        </>
      )}
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
