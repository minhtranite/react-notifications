import AppDispatcher from 'dispatcher/AppDispatcher';
import NotificationsConstant from 'constants/NotificationsConstant';

const NotificationsActions = {
  info: function (message, title, timeOut, onClick) {
    AppDispatcher.dispatch({
      actionType: NotificationsConstant.CREATE,
      type: NotificationsConstant.INFO,
      message: message,
      title: title,
      timeOut: timeOut,
      onClick: onClick
    });
  },
  success: function (message, title, timeOut, onClick) {
    AppDispatcher.dispatch({
      actionType: NotificationsConstant.CREATE,
      type: NotificationsConstant.SUCCESS,
      message: message,
      title: title,
      timeOut: timeOut,
      onClick: onClick
    });
  },
  warning: function (message, title, timeOut, onClick) {
    AppDispatcher.dispatch({
      actionType: NotificationsConstant.CREATE,
      type: NotificationsConstant.WARNING,
      message: message,
      title: title,
      timeOut: timeOut,
      onClick: onClick
    });
  },
  error: function (message, title, timeOut, onClick) {
    AppDispatcher.dispatch({
      actionType: NotificationsConstant.CREATE,
      type: NotificationsConstant.ERROR,
      message: message,
      title: title,
      timeOut: timeOut,
      onClick: onClick
    });
  },
  remove: function (notification) {
    AppDispatcher.dispatch({
      actionType: NotificationsConstant.REMOVE,
      notification: notification
    });
  }
};

export default NotificationsActions;
