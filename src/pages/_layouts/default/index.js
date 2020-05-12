import React, { useState } from 'react';

import './index.css';

import Sidebar from './sidebar';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';
import Header from '../../../components/Header';

const MenuContext = React.createContext({
  menuOpenState: true,
});

export default function DefaultLayout({ children, title }) {
  const [menuOpenState, setMenuOpenState] = useState(window.innerWidth > 768);

  function toggleMenu() {
    setMenuOpenState(!menuOpenState);
  }

  return (
    <MenuContext.Provider value={{ menuOpenState }}>
      <Header toggleMenu={toggleMenu} title={title} />
      <MenuContext.Consumer>
        {({ menuOpenState }) => <Sidebar isOpen={menuOpenState} />}
      </MenuContext.Consumer>
      <Wrapper id="page-wrap">
        <Content>{children}</Content>
      </Wrapper>
    </MenuContext.Provider>
  );
}

DefaultLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
