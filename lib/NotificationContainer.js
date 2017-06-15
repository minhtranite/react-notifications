'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NotificationManager = require('./NotificationManager');

var _NotificationManager2 = _interopRequireDefault(_NotificationManager);

var _Notifications = require('./Notifications');

var _Notifications2 = _interopRequireDefault(_Notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationContainer = function (_React$Component) {
  _inherits(NotificationContainer, _React$Component);

  function NotificationContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotificationContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationContainer.__proto__ || Object.getPrototypeOf(NotificationContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notifications: []
    }, _this.componentWillMount = function () {
      _NotificationManager2.default.addChangeListener(_this.handleStoreChange);
    }, _this.componentWillUnmount = function () {
      _NotificationManager2.default.removeChangeListener(_this.handleStoreChange);
    }, _this.handleStoreChange = function (notifications) {
      _this.setState({
        notifications: notifications
      });
    }, _this.handleRequestHide = function (notification) {
      _NotificationManager2.default.remove(notification);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NotificationContainer, [{
    key: 'render',
    value: function render() {
      var notifications = this.state.notifications;
      var _props = this.props,
          enterTimeout = _props.enterTimeout,
          leaveTimeout = _props.leaveTimeout;

      return _react2.default.createElement(_Notifications2.default, {
        enterTimeout: enterTimeout,
        leaveTimeout: leaveTimeout,
        notifications: notifications,
        onRequestHide: this.handleRequestHide
      });
    }
  }]);

  return NotificationContainer;
}(_react2.default.Component);

NotificationContainer.propTypes = {
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};
NotificationContainer.defaultProps = {
  enterTimeout: 400,
  leaveTimeout: 400
};
exports.default = NotificationContainer;
module.exports = exports['default'];