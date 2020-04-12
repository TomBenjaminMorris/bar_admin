import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navItems = ['Details', 'Deals', 'Photos', 'Help', 'Log Out'];

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    {navItems.map( (item, i) => {
      return <NavigationItem key={item + i} link="/" navType={item}>{item}</NavigationItem>
    })}
  </ul>
);

export default navigationItems;