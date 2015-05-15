var React = require('react');
var Notification = require('./Notification');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var ClassNames = require('classnames');

var Notifications = React.createClass({
  propTypes: {
    notifications: React.PropTypes.array.isRequired,
    onRequestHide: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      onRequestHide: function () {
      }
    };
  },
  handleRequestHide: function (notification) {
    return function () {
      this.props.onRequestHide(notification);
    }.bind(this);
  },
  render: function () {
    var notifications = this.props.notifications.map(function (notification) {
      var key = notification.id || new Date().getTime();
      return (
        <Notification key={key} type={notification.type}
          title={notification.title} message={notification.message}
          timeOut={notification.timeOut}
          onClick={notification.onClick}
          onRequestHide={this.handleRequestHide(notification)}/>
      );
    }.bind(this));
    var className = ClassNames('notification-container', {
      'notification-container-empty': this.props.notifications.length === 0
    });
    return (
      <div className={className}>
        <ReactCSSTransitionGroup transitionName='notification'>
          {notifications}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Notifications;
