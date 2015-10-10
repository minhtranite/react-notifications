import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Notifications from 'react-notifications';

import './bower_components/bootstrap-customize/css/bootstrap.css';
import 'react-notifications/lib/notifications.scss';
import './assets/styles/app.scss';

class App extends React.Component {
  state = {
    notifications: []
  };

  handleRequestHide = (notification) => {
    let notifications = this.state.notifications.filter(function (n) {
      return n.id !== notification.id;
    });
    this.setState({
      notifications: notifications
    });
  };

  createNotification = (type) => {
    return function () {
      let notifications = this.state.notifications;
      let id = new Date().getTime();
      let notification = {
        id: id,
        type: type,
        title: 'Title',
        message: 'message',
        timeOut: (Math.random() * 10000),
        onClick: function () {
          console.log('On Click');
        }
      };
      notifications.push(notification);
      this.setState({
        notifications: notifications
      });
    }.bind(this);
  };

  render() {
    return (
      <div className='layout-page'>
        <Header/>
        <main className='layout-main'>
          <div className='container'>
            <button className='btn btn-info'
              onClick={this.createNotification('info')}>Info
            </button>
            <hr/>
            <button className='btn btn-success'
              onClick={this.createNotification('success')}>Success
            </button>
            <hr/>
            <button className='btn btn-warning'
              onClick={this.createNotification('warning')}>Warning
            </button>
            <hr/>
            <button className='btn btn-danger'
              onClick={this.createNotification('error')}>Error
            </button>
          </div>
        </main>
        <Footer/>
        <Notifications notifications={this.state.notifications}
          onRequestHide={this.handleRequestHide}/>
      </div>
    );
  }
}

function run() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
