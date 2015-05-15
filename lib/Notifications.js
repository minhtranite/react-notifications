'use strict';

var React = require('react');
var Notification = require('./Notification');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var ClassNames = require('classnames');

var Notifications = React.createClass({
  displayName: 'Notifications',

  propTypes: {
    notifications: React.PropTypes.array.isRequired,
    onRequestHide: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      onRequestHide: function onRequestHide() {}
    };
  },
  handleRequestHide: function handleRequestHide(notification) {
    return (function () {
      this.props.onRequestHide(notification);
    }).bind(this);
  },
  render: function render() {
    var notifications = this.props.notifications.map((function (notification) {
      var key = notification.id || new Date().getTime();
      return React.createElement(Notification, { key: key, type: notification.type,
        title: notification.title, message: notification.message,
        timeOut: notification.timeOut,
        onClick: notification.onClick,
        onRequestHide: this.handleRequestHide(notification) });
    }).bind(this));
    var className = ClassNames('notification-container', {
      'notification-container-empty': this.props.notifications.length === 0
    });
    return React.createElement(
      'div',
      { className: className },
      React.createElement(
        ReactCSSTransitionGroup,
        { transitionName: 'notification' },
        notifications
      )
    );
  }
});

module.exports = Notifications;