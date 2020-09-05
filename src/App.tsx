import React, { SFC } from 'react';
import { Button } from 'antd';
import './App.scss';

const App: SFC = () => {
  const handleOnClick = () => {
    throw new Error('throw error');
  };

  return (
    <div className="form">
      <div className="form-text">text hhh 1 2</div>
      <Button type="dashed" onClick={handleOnClick}>
        primary
      </Button>
    </div>
  );
};

export default App;
