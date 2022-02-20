import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './rocket.jpg';

const FirstLeftText = () => <p>What is UNOS?</p>;

const FirstRightText = () => (
  <p>
    Universal Not-Propietary Operations System or UNOS is an artificial intelligence-powered system operator that is designed with expandability, transparency and adaptability in mind.
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

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1>UNOS Assistant System</h1>;

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
