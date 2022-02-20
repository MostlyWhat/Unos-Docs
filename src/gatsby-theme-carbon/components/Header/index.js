import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = (props) => (
  <Header {...props}>
    UNOS Assistant&nbsp;<span>Version Alpha</span>
  </Header>
);

export default CustomHeader;
