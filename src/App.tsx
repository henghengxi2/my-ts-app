import React, { FC, SFC } from 'react';
import { Button } from 'antd';
import './App.scss';

const App: SFC = () => {
  return (
    <div className="form">
      <div className="form-text">text hhh 1 2</div>
      <Button type="dashed">primary</Button>
    </div>
  );
};

export default App;
