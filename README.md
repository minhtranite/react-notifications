# React Notifications

[<img src="example/assets/images/screenshot.png" style="width: 100%;" />](http://vn38minhtran.github.io/react-notifications)

## Installation

```
npm install --save react-notifications
```

## Usage

```js
var Notifications = require('react-notifications');

var notifications = [
  {
    id: 1,
    title: 'Title',
    message: 'Message'
  },
  {
    id: 2,
    title: 'Title',
    message: 'Message'
  }
];

function handleRequestHide(notification){
  console.log(notification)
}

<Notifications notifications={notifications} onRequestHide={handleRequestHide}/>
```

## Props

- notifications: [] : Array of notification object.
- onRequestHide: function(notification) : Callback function

## Notification object

```js
{
  id: [number],
  title: [string],
  message: 'String',
  timeOut: [milliseconds],
  onClick: [function]
}
```

## Example
View [demo](http://vn38minhtran.github.io/react-notifications) or example folder.