import { createBrowserHistory } from 'history';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { logMe } from '../helpers/util';
import { App } from './app';
import { GlobalHistoryCatcherComponent } from './components/history-catcher';
import './index.scss';
import { Store } from './store';

const history = createBrowserHistory();
const rootElement = document.querySelector('#root') as Element;
const root = createRoot(rootElement);
logMe();

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router history={history}>
        <GlobalHistoryCatcherComponent />
        <App />
        <div className="bg" />
      </Router>
    </Provider>
  </React.StrictMode>,
);

export {};
