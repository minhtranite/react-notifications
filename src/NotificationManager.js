import {EventEmitter} from 'events';

const Constants = {
  CHANGE: 'change',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

const getTime = () => {
  let d = new Date();
  return d.getTime();
};

class NotificationManager extends EventEmitter {
  constructor() {
    super();
    this.listNotify = [];
  }

  create(notify) {
    notify.type = notify.type || Constants.INFO;
    let defaultNotify = {
      id: getTime(),
      type: 'info',
      title: null,
      message: null,
      timeOut: 5000
    };
    this.listNotify.push(Object.assign(defaultNotify, notify));
    this.emitChange();
  }

  info(message, title, timeOut, onClick) {
    this.create({
      type: Constants.INFO,
      message: message,
      title: title,
      timeOut: timeOut,
      onClick: onClick
    });
  }

  success(message, title, timeOut, onClick) {
    this.create({
      type: Constants.SUCCESS,
      message: message,
      title: title,
      timeOut: timeOut,
      onClick: onClick
    });
  }

  warning(message, title, timeOut, onClick) {
    this.create({
      type: Constants.WARNING,
      message: message,
      title: title,
      timeOut: timeOut,
      onClick: onClick
    });
  }

  error(message, title, timeOut, onClick) {
    this.create({
      type: Constants.ERROR,
      message: message,
      title: title,
      timeOut: timeOut,
      onClick: onClick
    });
  }

  remove(notification) {
    this.listNotify = this.listNotify.filter(n => notification.id !== n.id);
    this.emitChange();
  }

  emitChange() {
    this.emit(Constants.CHANGE, this.listNotify);
  }

  addChangeListener(callback) {
    this.addListener(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new NotificationManager();

