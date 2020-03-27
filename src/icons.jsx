import React from 'react';

const Icons = props => (
  <div className='icon-bar'>
    {props.icons.map(icon => (
      <i class={`${icon} dev-icon`}></i>
    ))}
  </div>
);

export default Icons;
