'use strict';

var _Notifications = require('./Notifications.js');

var _Notifications2 = _interopRequireDefault(_Notifications);

var _NotificationContainer = require('./NotificationContainer');

var _NotificationContainer2 = _interopRequireDefault(_NotificationContainer);

var _NotificationManager = require('./NotificationManager');

var _NotificationManager2 = _interopRequireDefault(_NotificationManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export { Notifications, NotificationContainer, NotificationManager };
// export default Notifications;

module.exports = {
  Notifications: _Notifications2.default,
  NotificationContainer: _NotificationContainer2.default,
  NotificationManager: _NotificationManager2.default
};