import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import classnames from 'classnames';
import Notification from './Notification';

const Notifications = ({
  notifications = [],
  onRequestHide = () => {  },
  enterTimeout = 400,
  leaveTimeout = 400
}) => {
  const handleRequestHide = notification => () => {
    if (onRequestHide) onRequestHide(notification);
  };

  const className = classnames('notification-container', {
    'notification-container-empty': notifications.length === 0
  });

  return (
    <div className={className}>
      <CSSTransitionGroup
        transitionName="notification"
        transitionEnterTimeout={enterTimeout}
        transitionLeaveTimeout={leaveTimeout}
      >
        {notifications.map((notification) => {
          const key = notification.id || new Date().getTime();
          return (
            <Notification
              key={key}
              type={notification.type}
              title={notification.title}
              message={notification.message}
              timeOut={notification.timeOut}
              onClick={notification.onClick}
              onRequestHide={handleRequestHide(notification)}
            />
          );
        })}
      </CSSTransitionGroup>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  onRequestHide: PropTypes.func,
  enterTimeout: PropTypes.number,
  leaveTimeout: PropTypes.number
};

export default Notifications;
