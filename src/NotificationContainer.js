import React from 'react';
import PropTypes from 'prop-types';
import NotificationManager from './NotificationManager';
import Notifications from './Notifications';

class NotificationContainer extends React.Component {
  static propTypes = {
    enterTimeout: PropTypes.number,
    exitTimeout: PropTypes.number
  };

  static defaultProps = {
    enterTimeout: 400,
    exitTimeout: 400
  };

  state = {
    notifications: []
  };

  componentDidMount = () => {
    NotificationManager.addChangeListener(this.handleStoreChange);
  };

  componentWillUnmount = () => {
    NotificationManager.removeChangeListener(this.handleStoreChange);
  };

  handleStoreChange = (notifications) => {
    this.setState({
      notifications
    });
  };

  handleRequestHide = (notification) => {
    NotificationManager.remove(notification);
  };

  render() {
    const { notifications } = this.state;
    const { enterTimeout, exitTimeout } = this.props;
    return (
      <Notifications
        enterTimeout={enterTimeout}
        exitTimeout={exitTimeout}
        notifications={notifications}
        onRequestHide={this.handleRequestHide}
      />
    );
  }
}

export default NotificationContainer;
