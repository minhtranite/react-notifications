import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NotificationManager from './NotificationManager';
import Notifications from './Notifications';

const NotificationContainer = ({
  enterTimeout = 400,
  leaveTimeout = 400
}) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    NotificationManager.addChangeListener(handleStoreChange);

    NotificationManager.removeChangeListener(handleStoreChange);
  });

  const handleStoreChange = newNotifications => {
    setNotifications(newNotifications)
  };

  const handleRequestHide = (notification) => {
    NotificationManager.remove(notification);
  };

  return (
    <Notifications
      enterTimeout={enterTimeout}
      leaveTimeout={leaveTimeout}
      notifications={notifications}
      onRequestHide={handleRequestHide}
    />
  );
}

NotificationContainer.propTypes = {
  enterTimeout: PropTypes.number,
  leaveTimeout: PropTypes.number
};

export default NotificationContainer;
