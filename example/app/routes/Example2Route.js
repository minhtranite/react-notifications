export default {
  path: 'ex-2',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/Example2Page'));
    }, 'page-ex-2');
  }
};
