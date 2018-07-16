import React from 'react';

const Education = ({ items }) => items.map((item, index) =>
    item.copyright
        ? (
            <span className = 'copyright' key = { index }>
                { item.copyright }
            </span>
        )
        : (
            <div className = 'eduspace' key = { index }>
                <span className = 'period'>{ item.period }</span>
                <span className = 'eduspace'>{ item.eduspace }</span>
                <span className = 'degree'>{ item.degree }</span>
            </div>
        )
);

export default Education;
