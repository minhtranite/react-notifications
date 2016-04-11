export default {
  path: 'transition-animation',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/TransitionAnimation'));
    }, 'page-transition-animation');
  }
};
