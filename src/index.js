import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Shoply from './shoply';
import Kartify from './kartify';
import Stashit from './stashit';

const App = () => {
  return (
    <>
      <Header />
      <Shoply />
      <Kartify />
      <Stashit />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#mount'));
