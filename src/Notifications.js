import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import Notification from './Notification';

class Notifications extends React.Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    onRequestHide: PropTypes.func,
    enterTimeout: PropTypes.number,
    exitTimeout: PropTypes.number
  };

  static defaultProps = {
    notifications: [],
    onRequestHide: () => {
    },
    enterTimeout: 400,
    exitTimeout: 400
  };

  handleRequestHide = notification => () => {
    const { onRequestHide } = this.props;
    if (onRequestHide) {
      onRequestHide(notification);
    }
  };

  render() {
    const { notifications, enterTimeout, exitTimeout } = this.props;
    const className = classnames('notification-container', {
      'notification-container-empty': notifications.length === 0
    });
    return (
      <div className={className}>
        <TransitionGroup>
          {notifications.map((notification) => {
            const key = notification.id || new Date().getTime();
            return (
              <CSSTransition
                key={key}
                classNames="notification"
                timeout={{ enter: enterTimeout, exit: exitTimeout }}
              >
                <Notification
                  type={notification.type}
                  title={notification.title}
                  message={notification.message}
                  timeOut={notification.timeOut}
                  onClick={notification.onClick}
                  onRequestHide={this.handleRequestHide(notification)}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}

export default Notifications;
