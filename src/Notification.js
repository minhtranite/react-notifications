import React from 'react';
import classnames from 'classnames';

class Notification extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    title: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    message: React.PropTypes.string.isRequired,
    timeOut: React.PropTypes.number,
    onClick: React.PropTypes.func,
    onRequestHide: React.PropTypes.func
  };

  static defaultProps = {
    type: 'info',
    title: null,
    message: null,
    timeOut: 5000
  };

  componentDidMount = () => {
    let {timeOut} = this.props;
    if (timeOut !== 0) {
      this.timer = setTimeout(this.requestHide, timeOut);
    }
  };

  componentWillUnmount = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  handleClick = () => {
    let {onClick} = this.props;
    if (onClick) {
      onClick();
    }
    this.requestHide();
  };

  requestHide = () => {
    let {onRequestHide} = this.props;
    if (onRequestHide) {
      onRequestHide();
    }
  };

  render() {
    let {type, title, message} = this.props;
    let className = classnames(['notification', `notification-${type}`]);
    title = title ? (<h4 className="title">{title}</h4>) : null;
    return (
      <div className={className} onClick={this.handleClick}>
        <div className="notification-message">
          {title}
          <div className="message">{message}</div>
        </div>
      </div>
    );
  }
}

export default Notification;


