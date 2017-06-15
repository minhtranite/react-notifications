'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createUUID = function createUUID() {
  var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

var Constants = {
  CHANGE: 'change',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

var NotificationManager = function (_EventEmitter) {
  _inherits(NotificationManager, _EventEmitter);

  function NotificationManager() {
    _classCallCheck(this, NotificationManager);

    var _this = _possibleConstructorReturn(this, (NotificationManager.__proto__ || Object.getPrototypeOf(NotificationManager)).call(this));

    _this.listNotify = [];
    return _this;
  }

  _createClass(NotificationManager, [{
    key: 'create',
    value: function create(notify) {
      var defaultNotify = {
        id: createUUID(),
        type: 'info',
        title: null,
        message: null,
        timeOut: 5000
      };
      if (notify.priority) {
        this.listNotify.unshift(Object.assign(defaultNotify, notify));
      } else {
        this.listNotify.push(Object.assign(defaultNotify, notify));
      }
      this.emitChange();
    }
  }, {
    key: 'info',
    value: function info(message, title, timeOut, onClick, priority) {
      this.create({
        type: Constants.INFO,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority
      });
    }
  }, {
    key: 'success',
    value: function success(message, title, timeOut, onClick, priority) {
      this.create({
        type: Constants.SUCCESS,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority
      });
    }
  }, {
    key: 'warning',
    value: function warning(message, title, timeOut, onClick, priority) {
      this.create({
        type: Constants.WARNING,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority
      });
    }
  }, {
    key: 'error',
    value: function error(message, title, timeOut, onClick, priority) {
      this.create({
        type: Constants.ERROR,
        message: message,
        title: title,
        timeOut: timeOut,
        onClick: onClick,
        priority: priority
      });
    }
  }, {
    key: 'remove',
    value: function remove(notification) {
      this.listNotify = this.listNotify.filter(function (n) {
        return notification.id !== n.id;
      });
      this.emitChange();
    }
  }, {
    key: 'emitChange',
    value: function emitChange() {
      this.emit(Constants.CHANGE, this.listNotify);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(callback) {
      this.addListener(Constants.CHANGE, callback);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(callback) {
      this.removeListener(Constants.CHANGE, callback);
    }
  }]);

  return NotificationManager;
}(_events.EventEmitter);

exports.default = new NotificationManager();
module.exports = exports['default'];