import React from 'react';

import classes from './Spinner.css';

const spinner = (props) => (
    <div className={`${classes.Loader} ${props.className}`}>Loading...</div>
);

export default spinner;