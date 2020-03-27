import React from 'react';

const Header = () => (
  <div id='header'>
    <img src='./images/alec.jpg'></img>
    <div id='info'>
      <h1>Alec Champaign</h1>
      <h3>Software Engineer</h3>
      <h5>Full-Stack</h5>
      <div id='social'>
        <a href='https://github.com/alecchampaign' target='blank'>
          <ion-icon name='logo-github'></ion-icon>
        </a>
        <a href='https://www.linkedin.com/in/alec-champaign/' target='blank'>
          <ion-icon name='logo-linkedin'></ion-icon>
        </a>
        <a href='https://twitter.com/AlecChampaign' target='blank'>
          <ion-icon name='logo-twitter'></ion-icon>
        </a>
      </div>
      <div id='header-btns'>
        <a class='header-btn' href='#shoply'>
          View my work
        </a>
        <a
          class='header-btn'
          href='mailto:alechchampaign@gmail.com'
          target='blank'
        >
          Get in touch
        </a>
      </div>
    </div>
  </div>
);

export default Header;
