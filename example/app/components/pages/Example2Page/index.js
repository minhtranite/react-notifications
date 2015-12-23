import React from 'react';
import Document from 'components/common/Document';
import Example2 from './Example2';

class Example2Page extends React.Component {
  render() {
    return (
      <Document title='Example2 | React notifications' className='page-ex-2'>
        <div>
          <div className='page-header'>
            <h1>Flux</h1>
          </div>
          <Example2/>
        </div>
      </Document>
    );
  }
}

export default Example2Page;

