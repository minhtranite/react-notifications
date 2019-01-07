import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/src/notifications.scss';
import 'assets/styles/app.scss';

const run = () => {
  render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('app')
  );
};

window.addEventListener('DOMContentLoaded', run);
