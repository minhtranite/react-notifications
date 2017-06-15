'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      var timeOut = _this.props.timeOut;

      if (timeOut !== 0) {
        _this.timer = setTimeout(_this.requestHide, timeOut);
      }
    }, _this.componentWillUnmount = function () {
      if (_this.timer) {
        clearTimeout(_this.timer);
      }
    }, _this.handleClick = function () {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick();
      }
      _this.requestHide();
    }, _this.requestHide = function () {
      var onRequestHide = _this.props.onRequestHide;

      if (onRequestHide) {
        onRequestHide();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          message = _props.message;
      var title = this.props.title;

      var className = (0, _classnames2.default)(['notification', 'notification-' + type]);
      title = title ? _react2.default.createElement(
        'h4',
        { className: 'title' },
        title
      ) : null;
      return _react2.default.createElement(
        'div',
        { className: className, onClick: this.handleClick },
        _react2.default.createElement(
          'div',
          { className: 'notification-message', role: 'alert' },
          title,
          _react2.default.createElement(
            'div',
            { className: 'message' },
            message
          )
        )
      );
    }
  }]);

  return Notification;
}(_react2.default.Component);

Notification.propTypes = {
  type: _propTypes2.default.oneOf(['info', 'success', 'warning', 'error']),
  title: _propTypes2.default.node,
  message: _propTypes2.default.node.isRequired,
  timeOut: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  onRequestHide: _propTypes2.default.func
};
Notification.defaultProps = {
  type: 'info',
  title: null,
  message: null,
  timeOut: 5000,
  onClick: function onClick() {},
  onRequestHide: function onRequestHide() {}
};
exports.default = Notification;
module.exports = exports['default'];