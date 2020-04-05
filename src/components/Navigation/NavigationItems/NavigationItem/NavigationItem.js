import React from "react";

import classes from "./NavigationItem.css";
import locationIcon from "../../../../assets/icons/discover.png";
import dealsIcon from "../../../../assets/icons/cocktail.png";
import helpIcon from "../../../../assets/icons/help.png";
import photosIcon from "../../../../assets/icons/image.png";
import logOutIcon from "../../../../assets/icons/logout.png";

const navigationItem = (props) => {

  let finalIcon = '';
  
  switch(props.navType) {
    case 'Details':
      finalIcon = locationIcon;
      break;
    case 'Deals':
      finalIcon = dealsIcon;
      break;
    case 'Help':
      finalIcon = helpIcon;
      break;
    case 'Photos':
      finalIcon = photosIcon;
      break;
    case 'Log Out':
      finalIcon = logOutIcon;
      break;
    default:
      // code block
  }

  return (
    <li className={classes.NavigationItem}>
      <div>
        <img src={finalIcon} />
      </div>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
