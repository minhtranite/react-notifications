import React from 'react';
import Notifications from 'react-notifications';

import './notifications.scss';

class Example1 extends React.Component {
  state = {
    notifications: []
  };

  handleRequestHide = (notification) => {
    let notifications = this.state.notifications.filter(n => n.id !== notification.id);
    this.setState({
      notifications: notifications
    });
  };

  createNotification = (type) => {
    return () => {
      let notifications = this.state.notifications;
      let id = new Date().getTime();
      let notification = {
        id: id,
        type: type,
        title: 'Title',
        message: 'message',
        timeOut: (Math.random() * 10000),
        onClick: () => {
          console.log('On Click');
        }
      };
      notifications.push(notification);
      this.setState({
        notifications: notifications
      });
    };
  };

  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>
        <Notifications notifications={this.state.notifications}
          enterTimeout={800}
          leaveTimeout={500}
          onRequestHide={this.handleRequestHide}/>
      </div>
    );
  }
}

export default Example1;
