import React from 'react';

import Icons from './icons';

const Kartify = () => (
  <div id='kartify'>
    <img class='thumbnail' id='kartify-img' src='./images/kartify.png'></img>
    <div class='outer-container alt'>
      <div>
        <a
          class='title'
          href='https://github.com/Agile-Beluga/kartify-api-reviews'
          target='blank'
        >
          Kartify - Reviews
        </a>
        <p>
          An API responsible for serving millions of records at scale to an
          e-commerce front-end. This particular module of the API, Reviews,
          contains data regarding user reviews for over a million products.
        </p>
        <h4>Technology</h4>
        <p>
          The Reviews module was hosted on a Node / Express server, stored
          review data in a PostgreSQL database, and was deployed to AWS as a
          Docker container.
        </p>
        <Icons
          icons={[
            'devicon-postgresql-plain-wordmark colored',
            'devicon-docker-plain-wordmark colored',
            'devicon-amazonwebservices-plain-wordmark colored',
            'devicon-nodejs-plain-wordmark colored',
            'devicon-express-original-wordmark'
          ]}
        />
      </div>
      <a
        class='github-btn'
        href='https://github.com/Agile-Beluga/kartify-api-reviews'
        target='blank'
      >
        View GitHub
      </a>
    </div>
  </div>
);

export default Kartify;
