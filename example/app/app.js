import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {createHistory, useBasename} from 'history';
import Router from 'react-router';
import App from 'components/App.js';
import {name} from '../../package.json';

import 'assets/bower_components/bootstrap-customize/css/bootstrap.css';
import 'react-notifications/src/notifications.scss';
import 'assets/styles/app.scss';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: require('./components/pages/HomePage')
  },
  childRoutes: [
    require('./routes/Example1Route'),
    require('./routes/Example2Route')
  ]
};

const DEV = process && process.env && process.env.NODE_ENV === 'development';
const history = useBasename(createHistory)({
  basename: '/' + (DEV ? '' : name)
});

const run = () => {
  ReactDOM.render(
    <Router routes={routes} history={history}/>,
    document.getElementById('app')
  );
};

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
