'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Notifications = (function (_React$Component) {
  _inherits(Notifications, _React$Component);

  function Notifications() {
    var _this = this;

    _classCallCheck(this, Notifications);

    _get(Object.getPrototypeOf(Notifications.prototype), 'constructor', this).apply(this, arguments);

    this.handleRequestHide = function (notification) {
      return function () {
        var onRequestHide = _this.props.onRequestHide;

        if (onRequestHide) {
          onRequestHide(notification);
        }
      };
    };
  }

  _createClass(Notifications, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var notifications = _props.notifications;
      var enterTimeout = _props.enterTimeout;
      var leaveTimeout = _props.leaveTimeout;

      var className = (0, _classnames2['default'])('notification-container', {
        'notification-container-empty': notifications.length === 0
      });
      return _react2['default'].createElement(
        'div',
        { className: className },
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: 'notification',
            transitionEnterTimeout: enterTimeout,
            transitionLeaveTimeout: leaveTimeout },
          notifications.map(function (notification) {
            var key = notification.id || new Date().getTime();
            return _react2['default'].createElement(_Notification2['default'], { key: key,
              type: notification.type,
              title: notification.title,
              message: notification.message,
              timeOut: notification.timeOut,
              onClick: notification.onClick,
              onRequestHide: _this2.handleRequestHide(notification) });
          })
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      notifications: _react2['default'].PropTypes.array.isRequired,
      onRequestHide: _react2['default'].PropTypes.func,
      enterTimeout: _react2['default'].PropTypes.number,
      leaveTimeout: _react2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      notifications: [],
      enterTimeout: 400,
      leaveTimeout: 400
    },
    enumerable: true
  }]);

  return Notifications;
})(_react2['default'].Component);

exports['default'] = Notifications;
module.exports = exports['default'];