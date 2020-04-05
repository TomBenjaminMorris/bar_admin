import React from 'react';

import classes from './Logo.css';

import burgerLogo from '../../assets/images/hh_logo.png';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="hapihour_beer"/>
  </div>

);

export default logo;