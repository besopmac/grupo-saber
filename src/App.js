import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';

import GlobalStyle from './styles/global';

import Routes from './routes';
import history from './services/history';

import { initGA } from './utils/googleAnalytics';
initGA();

function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </ConfigProvider>
  );
}

export default hot(App);
