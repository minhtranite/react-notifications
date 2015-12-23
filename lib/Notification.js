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

var Notification = (function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    var _this = this;

    _classCallCheck(this, Notification);

    _get(Object.getPrototypeOf(Notification.prototype), 'constructor', this).apply(this, arguments);

    this.componentDidMount = function () {
      if (_this.props.timeOut !== 0) {
        _this.timer = setTimeout(_this.requestHide, _this.props.timeOut);
      }
    };

    this.componentWillUnmount = function () {
      if (_this.timer) {
        clearTimeout(_this.timer);
      }
    };

    this.handleClick = function () {
      if (_this.props.onClick) {
        _this.props.onClick();
      }
      _this.requestHide();
    };

    this.requestHide = function () {
      if (_this.props.onRequestHide) {
        _this.props.onRequestHide();
      }
    };
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      var className = 'notification notification-' + this.props.type;
      var title = this.props.title ? _react2['default'].createElement(
        'h4',
        { className: 'title' },
        this.props.title
      ) : null;
      return _react2['default'].createElement(
        'div',
        { className: className, onClick: this.handleClick },
        _react2['default'].createElement(
          'div',
          { className: 'notification-message' },
          title,
          _react2['default'].createElement(
            'div',
            { className: 'message' },
            this.props.message
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      type: _react2['default'].PropTypes.oneOf(['info', 'success', 'warning', 'error']),
      title: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
      message: _react2['default'].PropTypes.string.isRequired,
      timeOut: _react2['default'].PropTypes.number,
      onClick: _react2['default'].PropTypes.func,
      onRequestHide: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      type: 'info',
      title: null,
      message: null,
      timeOut: 5000
    },
    enumerable: true
  }]);

  return Notification;
})(_react2['default'].Component);

exports['default'] = Notification;
module.exports = exports['default'];