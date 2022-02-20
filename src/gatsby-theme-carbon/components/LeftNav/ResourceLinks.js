import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'UNOS Github Repo',
    href: 'https://github.com/MostlyWhat/Unos-Assistant',
  },
  {
    title: 'MostlyWhat Website',
    href: 'https://www.carbondesignsystem.com',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
