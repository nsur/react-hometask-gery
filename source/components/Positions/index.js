import React from 'react';

const Positions = ({ items }) => items.map((item, index) => (
    <div className = 'workplace' key = { index }>
        <div className = 'leftColumn'>
            <span className = 'period'>{ item.period }</span>
            <span className = 'position'>{ item.position }</span>
        </div>
        <div className = 'rightColumn'>
            <span className = 'location'>{ item.location }</span>
            <span className = 'company'>{ item.company }</span>
        </div>
    </div>
));

export default Positions;
