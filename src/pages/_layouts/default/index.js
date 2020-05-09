import React from 'react';

import './index.css';

import Sidebar from './sidebar';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';
import Header from '../../../components/Header';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
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
