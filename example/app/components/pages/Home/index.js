import React from 'react';
import Document from 'components/common/Document';
import Example from './Example';

class HomePage extends React.Component {
  render() {
    return (
      <Document title='Home | React notifications' className='page-home'>
        <div>
          <div className='page-header'>
            <h1>Simple sample</h1>
          </div>
          <Example/>
        </div>
      </Document>
    );
  }
}

export default HomePage;
