import React from 'react';
import Document from 'components/Document';
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';

class HomePage extends React.Component {


  createNotification = type => () => {
    switch (type) {
      case 'info':
        this.notificationID = NotificationManager.info('Info message');
        break;
      case 'success':
        this.notificationID = NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        this.notificationID = NotificationManager.warning(
          'Warning message',
          'Close after 3000ms',
          3000
        );
        break;
      case 'error':
        this.notificationID = NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      case 'removeById':
        NotificationManager.removeById(this.notification);
        break;
      case 'removeAll':
        NotificationManager.removeAll();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <Document title="Home | React notifications" className="page-home">
        <div>
          <div className="page-header">
            <h1>Simple sample</h1>
          </div>
          <button
            className="btn btn-info"
            onClick={this.createNotification('info')}
          >
            Info
          </button>
          <hr />
          <button
            className="btn btn-success"
            onClick={this.createNotification('success')}
          >
            Success
          </button>
          <hr />
          <button
            className="btn btn-warning"
            onClick={this.createNotification('warning')}
          >
            Warning
          </button>
          <hr />
          <button
            className="btn btn-danger"
            onClick={this.createNotification('error')}
          >
            Error
          </button>
          <hr />
          <button
            className="btn btn-success"
            onClick={this.createNotification('info')}
          >
            Create
          </button>
          <button
            style={{ marginLeft: '10px' }}
            className="btn btn-danger"
            onClick={this.createNotification('removeById')}
          >
            Remove
          </button>
          <hr />
          <button
            className="btn btn-danger"
            onClick={this.createNotification('removeAll')}
          >
            Remove All
          </button>

          <NotificationContainer />
        </div>
      </Document>
    );
  }
}

export default HomePage;
