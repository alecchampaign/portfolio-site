import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#mount'));
