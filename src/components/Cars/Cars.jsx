import React from 'react';
import classnames from 'classnames';

import styles from './Cars.module.css';

export default ({className}) => {
  return (
    <div className={classnames(styles.container, className)}>
    CARS
    </div>
  );
}