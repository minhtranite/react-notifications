import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="layout-page">
        <Header/>
        <main className="layout-main">
          <div className="container">
            <div className="alert alert-warning" role="alert">
              <strong>Note: </strong> Use only one 'NotificationContainer'
              component in the app.
            </div>
            {this.props.children}
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
