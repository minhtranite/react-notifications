import React from 'react';

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
    if (this.props.timeOut !== 0) {
      this.timer = setTimeout(this.requestHide, this.props.timeOut);
    }
  };

  componentWillUnmount = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
    this.requestHide();
  };

  requestHide = () => {
    if (this.props.onRequestHide) {
      this.props.onRequestHide();
    }
  };

  render() {
    let className = 'notification notification-' + this.props.type;
    let title = this.props.title
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
}

export default Notification;


