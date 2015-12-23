import React from 'react';
import NotificationsStore from 'stores/NotificationsStore';
import NotificationsActionCreator from 'actions/NotificationsActions';
import Notifications from 'react-notifications';

class NotificationWrapper extends React.Component {
  state = {
    notifications: []
  };

  componentWillMount = () => {
    NotificationsStore.addChangeListener(this.handleStoreChange);
  };

  componentWillUnmount = () => {
    NotificationsStore.removeChangeListener(this.handleStoreChange);
  };

  handleStoreChange = (notifications) => {
    this.setState({
      notifications: notifications
    });
  };

  handleRequestHide = (notification) => {
    NotificationsActionCreator.remove(notification);
  };

  render() {
    return (
      <Notifications notifications={this.state.notifications}
        onRequestHide={this.handleRequestHide}/>
    );
  }
}

export default NotificationWrapper;
