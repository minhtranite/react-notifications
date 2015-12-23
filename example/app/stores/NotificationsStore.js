import {EventEmitter} from 'events';
import AppDispatcher from 'dispatcher/AppDispatcher';
import NotificationsConstant from 'constants/NotificationsConstant';
import Reject from 'lodash.reject';

let notifyList = [];
const types = ['info', 'success', 'warning', 'error'];

const getTime = () => {
  let d = new Date();
  return d.getTime();
};

const NotificationsStore = Object.assign({}, EventEmitter.prototype, {
  create: function (notify) {
    notify.type = notify.type || NotificationsConstant.INFO;
    if (types.indexOf(notify.type) === -1) {
      delete notify.type;
    }
    let defaultNotify = {
      id: getTime(),
      type: 'info',
      title: null,
      message: null,
      timeOut: 5000
    };
    notifyList.push(Object.assign(defaultNotify, notify));
  },
  remove: function (notification) {
    notifyList = Reject(notifyList, function (n) {
      return notification.id === n.id;
    });
  },
  emitChange: function () {
    this.emit(NotificationsConstant.CHANGE, notifyList);
  },
  addChangeListener: function (callback) {
    this.addListener(NotificationsConstant.CHANGE, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(NotificationsConstant.CHANGE, callback);
  }
});

NotificationsStore.dispatchToken = AppDispatcher.register(function (payload) {
  switch (payload.actionType) {
    case NotificationsConstant.CREATE:
      NotificationsStore.create(payload);
      NotificationsStore.emitChange();
      break;
    case NotificationsConstant.REMOVE:
      NotificationsStore.remove(payload.notification);
      NotificationsStore.emitChange();
      break;
  }
  return true;
});

export default NotificationsStore;
