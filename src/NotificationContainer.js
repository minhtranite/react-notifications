import React from 'react';
import NotificationManager from './NotificationManager';
import Notifications from './Notifications';

class NotificationContainer extends React.Component {
  static propTypes = {
    enterTimeout: React.PropTypes.number,
    leaveTimeout: React.PropTypes.number
  };

  static defaultProps = {
    enterTimeout: 400,
    leaveTimeout: 400
  };

  state = {
    notifications: []
  };

  componentWillMount = () => {
    NotificationManager.addChangeListener(this.handleStoreChange);
  };

  componentWillUnmount = () => {
    NotificationManager.removeChangeListener(this.handleStoreChange);
  };

  handleStoreChange = (notifications) => {
    this.setState({
      notifications: notifications
    });
  };

  handleRequestHide = (notification) => {
    NotificationManager.remove(notification);
  };

  render() {
    let {notifications} = this.state;
    return (
      <Notifications {...this.props}
        notifications={notifications}
        onRequestHide={this.handleRequestHide}/>
    );
  }
}

export default NotificationContainer;
