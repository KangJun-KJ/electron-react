import { getrandomWrod } from '@ui/services';
import { Button } from 'antd';
import React, { useState } from 'react';
import './index.css';
import logo from '@ui/assets/logo.png';
import { ipcRenderer } from 'electron';

const Main = () => {
  const [text, setText] = useState<string>('');
  const getBg = async () => {
    const data: any = await getrandomWrod();
    console.log(data);
    setText(data?.content);
  };

  const goElectronWebsite = () => {
    ipcRenderer.send('open-electron-website');
  };
  return (
    // <div className="main">
    //   <Button onClick={getBg} style={{ display: 'block', margin: '0 auto' }}>
    //     随机
    //   </Button>
    //   <div style={{ textAlign: 'center', lineHeight: '50px' }}>{text}</div>
    //   <img className="bg" src="https://api.ghser.com/random/pc.php" alt="" />
    // </div>
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
