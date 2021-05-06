import logo from '@ui/assets/logo.png';
import { ipcRenderer } from 'electron';
import React, { useState } from 'react';
import './index.css';

const Main = () => {
  const goElectronWebsite = () => {
    ipcRenderer.send('open-electron-website');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>ui/pages/main/index.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="#" onClick={goElectronWebsite}>
          Learn Electron
        </a>
      </header>
    </div>
  );
};

export default Main;
