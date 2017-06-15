import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Notification extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    title: PropTypes.node,
    message: PropTypes.node.isRequired,
    timeOut: PropTypes.number,
    onClick: PropTypes.func,
    onRequestHide: PropTypes.func
  };

  static defaultProps = {
    type: 'info',
    title: null,
    message: null,
    timeOut: 5000,
    onClick: () => {
    },
    onRequestHide: () => {
    }
  };

  componentDidMount = () => {
    const { timeOut } = this.props;
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
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
    this.requestHide();
  };

  requestHide = () => {
    const { onRequestHide } = this.props;
    if (onRequestHide) {
      onRequestHide();
    }
  };

  render() {
    const { type, message } = this.props;
    let { title } = this.props;
    const className = classnames(['notification', `notification-${type}`]);
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
