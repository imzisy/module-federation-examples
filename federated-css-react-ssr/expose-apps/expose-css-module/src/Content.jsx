import React from 'react';
import css2 from './baz.module.css';
import withStyles from 'isomorphic-style-loader/withStyles';

export default withStyles(css2)(props => (
  <div>
    <span className={css2.baz} data-e2e="FEDERATED_CSS_BUTTON">
      This is exposed Css Module Styled content
    </span>
  </div>
));
