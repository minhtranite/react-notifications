import React from 'react';
import Document from 'components/common/Document';
import Example1 from './Example1';

class Example1Page extends React.Component {
  render() {
    return (
      <Document title='Example1 | React notifications' className='page-ex-1'>
        <div>
          <div className='page-header'>
            <h1>Transition & animation</h1>
          </div>
          <Example1/>
        </div>
      </Document>
    );
  }
}

export default Example1Page;

