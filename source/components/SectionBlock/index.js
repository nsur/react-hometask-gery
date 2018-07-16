// Core
import React from 'react';

// Components
import Skills from '../Skills';
import Positions from '../Positions';
import Contacts from '../Contacts';
import Education from '../Education';

const SectionBlock = ({ items, type }) => {
    switch (type) {
        case 'skills':
            return <Skills items = { items } />;
        case 'positions':
            return <Positions items = { items } />;
        case 'contacts':
            return <Contacts items = { items } />;
        case 'education':
            return <Education items = { items } />;
        default:
            return null;
    }
};

export default SectionBlock;
