'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NotificationManager = require('./NotificationManager');

var _NotificationManager2 = _interopRequireDefault(_NotificationManager);

var _Notifications = require('./Notifications');

var _Notifications2 = _interopRequireDefault(_Notifications);

var NotificationContainer = (function (_React$Component) {
  _inherits(NotificationContainer, _React$Component);

  function NotificationContainer() {
    var _this = this;

    _classCallCheck(this, NotificationContainer);

    _get(Object.getPrototypeOf(NotificationContainer.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      notifications: []
    };

    this.componentWillMount = function () {
      _NotificationManager2['default'].addChangeListener(_this.handleStoreChange);
    };

    this.componentWillUnmount = function () {
      _NotificationManager2['default'].removeChangeListener(_this.handleStoreChange);
    };

    this.handleStoreChange = function (notifications) {
      _this.setState({
        notifications: notifications
      });
    };

    this.handleRequestHide = function (notification) {
      _NotificationManager2['default'].remove(notification);
    };
  }

  _createClass(NotificationContainer, [{
    key: 'render',
    value: function render() {
      var notifications = this.state.notifications;

      return _react2['default'].createElement(_Notifications2['default'], _extends({}, this.props, {
        notifications: notifications,
        onRequestHide: this.handleRequestHide }));
    }
  }], [{
    key: 'propTypes',
    value: {
      enterTimeout: _react2['default'].PropTypes.number,
      leaveTimeout: _react2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      enterTimeout: 400,
      leaveTimeout: 400
    },
    enumerable: true
  }]);

  return NotificationContainer;
})(_react2['default'].Component);

exports['default'] = NotificationContainer;
module.exports = exports['default'];