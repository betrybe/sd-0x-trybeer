import React from 'react';

import './index.css';

import Sidebar from './sidebar';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Wrapper id="page-wrap">{children}</Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  isPrivate: PropTypes.element.isRequired,
};
