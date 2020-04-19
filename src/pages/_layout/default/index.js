import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header/index';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
