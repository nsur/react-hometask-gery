// Core
import React from 'react';

// чиста функція
// якщо окрім return більше нічого немає, тоді можна відразу вертати значення
export default ({ sectionNumber, sectionName }) => (
    <section className = 'sectionHeading'>
        <h1>
            <span className = 'sectionNumber'>{ sectionNumber }</span>
            <span className = 'sectionName'>{ sectionName }</span>
        </h1>
    </section>
);
