import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './code.jpg';

const FirstLeftText = () => <p>What is <strong>UNOS</strong>?</p>;

const FirstRightText = () => (
  <p>
    <strong>Universal Not-Propietary Operations System</strong> or <strong>UNOS</strong> is an artificial intelligence-powered system operator that is designed with expandability, transparency and adaptability in mind.
  </p>
  // <p>
  //   This is a callout component. You can edit the contents by updating the{' '}
  //   <a href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/5fe12de31bb19fbfa2cab7c69cd942f55aa06f79/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
  //     pre-shadowed homepage template
  //   </a>
  //   . You can also provide <code>color</code> and <code>backgroundColor</code>{' '}
  //   props to suit your theme.
  //   <a
  //     className={calloutLink}
  //     href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
  //     Homepage source →
  //   </a>
  // </p>
);

const SecondLeftText = () => <p>Want to Contribute?</p>;

const SecondRightText = () => (
  <p>
    You can contribute to the UNOS Project by heading over to GitHub, cloning the repository and start writing new features!
    <a
      className={calloutLink}
      href="https://github.com/MostlyWhat/Unos-Assistant">
      UNOS Assistant GitHub Repository →
    </a>
  </p>
);

const BannerText = () => <h1><strong>UNOS Assistant System</strong></h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
