import React from 'react';
import NotificationActions from 'actions/NotificationsActions';

class Example2 extends React.Component {
  createNotification = (type) => {
    return (e) => {
      e.preventDefault();
      switch (type) {
        case 'info':
          NotificationActions.info('Message', 'Title');
          break;
        case 'success':
          NotificationActions.success('Message', 'Title');
          break;
        case 'warning':
          NotificationActions.warning('Message', 'Title');
          break;
        case 'error':
          NotificationActions.error('Message', 'Title');
          break;
      }
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
      </div>
    );
  }
}

export default Example2;
