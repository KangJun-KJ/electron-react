import React from 'react';

interface HistoryState {}

class History extends React.Component<any, HistoryState> {
  state: HistoryState = {};

  componentDidMount() {}

  render() {
    return <div className="history">历史页面</div>;
  }
}

export default History;
