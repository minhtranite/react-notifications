'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notifications = function (_React$Component) {
  _inherits(Notifications, _React$Component);

  function Notifications() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notifications);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notifications.__proto__ || Object.getPrototypeOf(Notifications)).call.apply(_ref, [this].concat(args))), _this), _this.handleRequestHide = function (notification) {
      return function () {
        var onRequestHide = _this.props.onRequestHide;

        if (onRequestHide) {
          onRequestHide(notification);
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notifications, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          notifications = _props.notifications,
          enterTimeout = _props.enterTimeout,
          leaveTimeout = _props.leaveTimeout;

      var className = (0, _classnames2.default)('notification-container', {
        'notification-container-empty': notifications.length === 0
      });
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          {
            transitionName: 'notification',
            transitionEnterTimeout: enterTimeout,
            transitionLeaveTimeout: leaveTimeout
          },
          notifications.map(function (notification) {
            var key = notification.id || new Date().getTime();
            return _react2.default.createElement(_Notification2.default, {
              key: key,
              type: notification.type,
              title: notification.title,
              message: notification.message,
              timeOut: notification.timeOut,
              onClick: notification.onClick,
              onRequestHide: _this2.handleRequestHide(notification)
            });
          })
        )
      );
    }
  }]);

  return Notifications;
}(_react2.default.Component);

Notifications.propTypes = {
  notifications: _propTypes2.default.array.isRequired,
  onRequestHide: _propTypes2.default.func,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};
Notifications.defaultProps = {
  notifications: [],
  onRequestHide: function onRequestHide() {},
  enterTimeout: 400,
  leaveTimeout: 400
};
exports.default = Notifications;
module.exports = exports['default'];