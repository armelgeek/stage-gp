import React, { Fragment } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Toast from './Toast';
import Routes from './Routes';
import Footer from '../Partials/Footer';
import Header from '../Partials/Header';
// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
import './fontStyles.css';
import styled from 'styled-components';
export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <Header />
    <Toast />
    <Container>
    	<Routes />
    </Container>
    
  </Fragment>
);

export default App;
