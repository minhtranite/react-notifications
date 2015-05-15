var React = require('react');

require('./bower_components/bootstrap-customize/css/bootstrap.css');
require('./assets/styles/app.scss');
require('../src/notifications.scss');

var Header = require('./components/Header');
var Footer = require('./components/Footer');
var Notifications = require('../src/Notifications');

var App = React.createClass({
  getInitialState: function () {
    return {
      notifications: []
    };
  },
  handleRequestHide: function (notification) {
    var notifications = this.state.notifications.filter(function (n) {
      return n.id !== notification.id;
    });
    this.setState({
      notifications: notifications
    });
  },
  createNotification: function (type) {
    return function () {
      var notifications = this.state.notifications;
      var id = new Date().getTime();
      var notification = {
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
  },
  render: function () {
    return (
      <div className={"layout-page"}>
        <Header/>
        <main className={"layout-main"}>
          <div className={"container"}>
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
});

React.render(<App />, document.body);

