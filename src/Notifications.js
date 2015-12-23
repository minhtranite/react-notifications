import React from 'react';
import Notification from './Notification';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ClassNames from 'classnames';

class Notifications extends React.Component {
  static propTypes = {
    notifications: React.PropTypes.array.isRequired,
    onRequestHide: React.PropTypes.func,
    enterTimeout: React.PropTypes.number,
    leaveTimeout: React.PropTypes.number
  };

  static defaultProps = {
    notifications: [],
    enterTimeout: 400,
    leaveTimeout: 400
  };

  handleRequestHide = (notification) => {
    return () => {
      if (this.props.onRequestHide) {
        this.props.onRequestHide(notification);
      }
    };
  };

  render() {
    let {notifications, enterTimeout, leaveTimeout} = this.props;
    let className = ClassNames({
      'notification-container': true,
      'notification-container-empty': this.props.notifications.length === 0
    });
    return (
      <div className={className}>
        <ReactCSSTransitionGroup transitionName='notification'
          transitionEnterTimeout={enterTimeout}
          transitionLeaveTimeout={leaveTimeout}>
          {notifications.map(notification => {
            let key = notification.id || new Date().getTime();
            return (
              <Notification key={key}
                type={notification.type}
                title={notification.title}
                message={notification.message}
                timeOut={notification.timeOut}
                onClick={notification.onClick}
                onRequestHide={this.handleRequestHide(notification)}/>
            );
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Notifications;

