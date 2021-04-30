import { getrandomWrod } from '@ui/services';
import { Button } from 'antd';
import React, { useState } from 'react';
import './index.css';

const Main = () => {
  const [text, setText] = useState<string>('');
  const getBg = async () => {
    const data: any = await getrandomWrod();
    console.log(data);
    setText(data?.content);
  };

  return (
    <div className="main">
      {/* <Button onClick={getBg} style={{ display: 'block', margin: '0 auto' }}>
        随机
      </Button>
      <div style={{ textAlign: 'center', lineHeight: '50px' }}>{text}</div> */}
      {/* <img className="bg" src="https://api.ghser.com/random/pc.php" alt="" /> */}
    </div>
  );
};

export default Main;
