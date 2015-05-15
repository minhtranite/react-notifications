'use strict';

var React = require('react');

var Notification = React.createClass({
  displayName: 'Notification',

  propTypes: {
    type: React.PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    title: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    message: React.PropTypes.string.isRequired,
    timeOut: React.PropTypes.number,
    onClick: React.PropTypes.func,
    onRequestHide: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      type: 'info',
      title: null,
      message: null,
      timeOut: 5000,
      onClick: function onClick() {},
      onRequestHide: function onRequestHide() {}
    };
  },
  componentDidMount: function componentDidMount() {
    if (this.props.timeOut !== 0) {
      this.timer = setTimeout(this.requestHide, this.props.timeOut);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  handleClick: function handleClick() {
    this.props.onClick();
    this.requestHide();
  },
  requestHide: function requestHide() {
    this.props.onRequestHide();
  },
  render: function render() {
    var className = 'notification notification-' + this.props.type;
    var title = this.props.title ? React.createElement(
      'h4',
      { className: 'title' },
      this.props.title
    ) : null;
    return React.createElement(
      'div',
      { className: className, onClick: this.handleClick },
      React.createElement(
        'div',
        { className: 'notification-message' },
        title,
        React.createElement(
          'div',
          { className: 'message' },
          this.props.message
        )
      )
    );
  }
});

module.exports = Notification;