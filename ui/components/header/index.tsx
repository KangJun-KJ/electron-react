import { maximize, minimize } from '@ui/utils/electron';
import { ipcRenderer } from 'electron';
import React from 'react';
import './index.css';

class Header extends React.Component {
  state = {};

  componentDidMount() {}

  onAppClose = async () => {
    ipcRenderer.send('app-close');
  };

  render() {
    return (
      <div className="header">
        <div className="app-title">Electron</div>
        <div className="container"></div>
        <div className="right">
          <span className="action">
            <span style={{ marginRight: 25 }}>用户xxx</span>
          </span>
          <div className="btns">
            <div className="icon min" onClick={minimize}></div>
            <div className="icon max" onClick={maximize}></div>
            <div className="icon close" onClick={this.onAppClose}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
