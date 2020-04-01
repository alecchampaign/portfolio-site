import React from 'react';

import Icons from './icons';

const Shoply = () => (
  <div id='shoply'>
    <div class='img-container'>
      <img class='thumbnail' src='./images/shoply.png'></img>
    </div>
    <div class='outer-container'>
      <div>
        <a
          class='title'
          href='https://github.com/grey-octopus/project_greenfield'
          target='blank'
        >
          Shop.ly
        </a>
        <p>
          A dynamic product page for an e-commerce shopping platform, allowing
          users to view product information, see related products, post reviews,
          and ask/answer questions.
        </p>
        <h4>Technology</h4>
        <p>
          Shop.ly was built using React / Redux with a Node / Express backend
          for handling API requests.
        </p>
        <Icons
          icons={[
            'devicon-react-original-wordmark colored',
            'devicon-nodejs-plain-wordmark colored',
            'devicon-express-original-wordmark'
          ]}
        />
      </div>
      <a
        class='github-btn'
        href='https://github.com/grey-octopus/project_greenfield'
        target='blank'
      >
        View GitHub
      </a>
    </div>
  </div>
);

export default Shoply;
