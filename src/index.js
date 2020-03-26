import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Shoply from './shoply';

const App = () => {
  return (
    <>
      <Header />
      <Shoply />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#mount'));
