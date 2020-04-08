import React from 'react';

import classes from './ToolbarUser.css';
import userIcon from '../../../assets/icons/user.png';

const toolbarUser = (props) => (
  <div className={classes.ToolbarUser}>
    <div><img src={userIcon} /></div>
    <div>Headrow House</div>
  </div>
);

export default toolbarUser;