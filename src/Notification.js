import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Notification extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    message: PropTypes.string.isRequired,
    timeOut: PropTypes.number,
    onClick: PropTypes.func,
    onRequestHide: PropTypes.func
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
        <div className="notification-message" role="alert">
          {title}
          <div className="message">{message}</div>
        </div>
      </div>
    );
  }
}

export default Notification;
