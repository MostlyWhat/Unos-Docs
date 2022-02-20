import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import SwitcherLink from 'gatsby-theme-carbon/src/components/Switcher';
import SwitcherDivider from 'gatsby-theme-carbon/src/components/Switcher';

const CustomSwitcher = (props) => (
    <Switcher {...props}>
        <SwitcherDivider>Technology Stack</SwitcherDivider>
        <SwitcherLink href="https://somelinks.id">
        Japan Festival
        </SwitcherLink>
        <SwitcherLink href="https://somelinks.id">
        Japan Festival Media
        </SwitcherLink>
        <SwitcherLink href="https://somelinks.id">
        Japan Festival Platfrom
        </SwitcherLink>
    </Switcher>
);

export default CustomSwitcher;