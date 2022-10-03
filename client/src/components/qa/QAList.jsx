import React from 'react';
import QAEntry from './QAEntry.jsx';

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <QAEntry/>
        <QAEntry/>
      </div>
    )
  }
}

export default QAList;