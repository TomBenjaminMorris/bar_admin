import React from "react";

import classes from './SideToolbar.css';
import Aux from '../../../hoc/Aux/Aux';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Line from '../../UI/Line/Line';
import ToolbarUser from '../ToolbarUser/ToolbarUser';

const sideToolbar = (props) => (
  <Aux>
    <div className={classes.SideToolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <Line />
        <NavigationItems />
        <Line />
      </nav>
      <ToolbarUser />
    </div>
  </Aux>
);

export default sideToolbar;
