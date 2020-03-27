import React from 'react';

import Icons from './icons';

const Stashit = () => (
  <div id='stashit'>
    <img class='thumbnail' src='./images/stashit.png'></img>
    <div class='outer-container'>
      <div>
        <a
          class='title'
          href='https://github.com/alecchampaign/stash.it'
          target='blank'
        >
          Stash.it
        </a>
        <p>A tool for saving articles to read later.</p>
        <h4>Technology</h4>
        <p>
          Stash.it was built using a React front-end and a Node / Express
          back-end. A PostgreSQL database was used to store article data.
          Suggested tags for articles based on content were generated using
          Google's Natural Language API.
        </p>
        <Icons
          icons={[
            'devicon-react-original-wordmark colored',
            'devicon-postgresql-plain-wordmark colored',
            'devicon-docker-plain-wordmark colored',
            'devicon-nodejs-plain-wordmark colored',
            'devicon-express-original-wordmark',
            'devicon-google-plain-wordmark'
          ]}
        />
      </div>
      <a
        class='github-btn'
        href='https://stash-it.herokuapp.com/'
        target='blank'
      >
        View Live
      </a>
      <a
        class='github-btn'
        href='https://github.com/alecchampaign/stash.it'
        target='blank'
      >
        View GitHub
      </a>
    </div>
  </div>
);

export default Stashit;
