# React Notifications

[<img src="./screenshot.png" style="width: 100%;" />](http://minhtranite.github.io/react-notifications)

## Installation

```
npm install --save react-notifications
```

## Usage

### Note

**Use only one 'NotificationContainer' component in the app.**

### CSS

#### Webpack:
```js
import 'react-notifications/lib/notifications.css';
```

#### Other
```html
<link rel="stylesheet" type="text/css" href="path/to/notifications.css">
```

### JS

```js
import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Example extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>

        <NotificationContainer/>
      </div>
    );
  }
}

export default Example;
```

### UMD

```html
<link rel="stylesheet" type="text/css" href="path/to/react-notifications/dist/react-notifications.css">
<script src="path/to/react-notifications/dist/react-notifications.js"></script>
```

```js
const NotificationContainer = window.ReactNotifications.NotificationContainer;
const NotificationManager = window.ReactNotifications.NotificationManager;
```

Example [here](https://codepen.io/minhtranite/pen/RgoaLL)

### Custom notification component

Use `notificationComponent` property to add user notification component.

``` javascript
<NotificationContainer notificationComponent={MyNotification} />
```

#### Example:

You can use this with `react-intl`:

``` javascript
// IntlNotification.js

import React from 'react'
import PropTypes from 'prop-types'
import Notification from 'react-notifications/lib/Notification'
import {injectIntl, intlShape} from 'react-intl'
import classnames from 'classnames'


class IntlNotification extends Notification {
    static propTypes = {
        ...Notification.propTypes,
        message: PropTypes.object.isRequired,
        intl: intlShape.isRequired,
    }

    render() {
        const {type} = this.props
        let {title} = this.props
        const className = classnames(['notification', `notification-${type}`])
        const {formatMessage} = this.props.intl
        title = title ? (<h4 className="title">{title}</h4>) : null
        let message = this.props.message
        message = formatMessage(message)
        return (
            <div className={className} onClick={this.handleClick}>
                <div className="notification-message" role="alert">
                    {title}
                    <div className="message">{message}</div>
                </div>
            </div>
        )
    }
}

export default injectIntl(IntlNotification)

```

``` javascript
<NotificationContainer notificationComponent={IntlNotification} />
```

And now you can send this message via notification manager instead of FormattedMessage component:

```
const msg = {id: 'my-string', defaultMessage: 'My string'}

NotificationManager.info(msg, null, 3000)
```

## NotificationContainer Props

| Name | Type | Default | Required |
|------|------|---------|----------|
| enterTimeout | number | 400 | false |
| leaveTimeout | number | 400 | false |

## NotificationManager API

- NotificationManager.info(message, title, timeOut, callback, priority);
- NotificationManager.success(message, title, timeOut, callback, priority);
- NotificationManager.warning(message, title, timeOut, callback, priority);
- NotificationManager.error(message, title, timeOut, callback, priority);

| Name | Type | Description |
|------|------|-------------|
| message | string | The message string |
| title | string | The title string |
| timeOut | integer | The popup timeout in milliseconds |
| callback | function | A function that gets fired when the popup is clicked |
| priority | boolean | If true, the message gets inserted at the top |

## Example
View [demo](http://minhtranite.github.io/react-notifications) or example folder.
