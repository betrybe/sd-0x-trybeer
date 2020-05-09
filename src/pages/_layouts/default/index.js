import React from 'react';

import './index.css';

import Sidebar from './sidebar';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Wrapper id="page-wrap">
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
