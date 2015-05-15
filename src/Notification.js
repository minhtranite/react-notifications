var React = require('react');

var Notification = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    title: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    message: React.PropTypes.string.isRequired,
    timeOut: React.PropTypes.number,
    onClick: React.PropTypes.func,
    onRequestHide: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      type: 'info',
      title: null,
      message: null,
      timeOut: 5000,
      onClick: function () {
      },
      onRequestHide: function () {
      }
    };
  },
  componentDidMount: function () {
    if (this.props.timeOut !== 0) {
      this.timer = setTimeout(this.requestHide, this.props.timeOut);
    }
  },
  componentWillUnmount: function () {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  handleClick: function () {
    this.props.onClick();
    this.requestHide();
  },
  requestHide: function () {
    this.props.onRequestHide();
  },
  render: function () {
    var className = 'notification notification-' + this.props.type;
    var title = this.props.title
      ? (<h4 className='title'>{this.props.title}</h4>)
      : null;
    return (
      <div className={className} onClick={this.handleClick}>
        <div className='notification-message'>
          {title}
          <div className='message'>{this.props.message}</div>
        </div>
      </div>
    );
  }
});

module.exports = Notification;


