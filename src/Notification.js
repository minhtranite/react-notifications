import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Notification = ({
  type = 'info',
  title = null,
  message = null,
  timeOut = 5000,
  onClick = () => {  },
  onRequestHide = () => {  }
}) => {
  let timer;

  useEffect(() => {
    if (timeOut !== 0) {
      timer = setTimeout(requestHide, timeOut);
    }

    if (timer) {
      clearTimeout(timer);
    }
  });

  const handleClick = () => {
    if (onClick) onClick();
    requestHide();
  };

  const requestHide = () => {
    if (onRequestHide) onRequestHide();
  };

  const className = classnames(['notification', `notification-${type}`]);
  title = title ? (<h4 className="title">{title}</h4>) : null;
  return (
    <div className={className} onClick={handleClick}>
      <div className="notification-message" role="alert">
        {title}
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

Notification.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  title: PropTypes.node,
  message: PropTypes.node.isRequired,
  timeOut: PropTypes.number,
  onClick: PropTypes.func,
  onRequestHide: PropTypes.func
}

export default Notification;
