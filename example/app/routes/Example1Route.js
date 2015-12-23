export default {
  path: 'ex-1',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/Example1Page'));
    }, 'page-ex-1');
  }
};
