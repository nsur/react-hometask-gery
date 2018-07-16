import React from 'react';

const Contacts = ({ items }) => items.map((item, index) => (
    <div className = 'contact' key = { index }>
        <span className = 'action'>{ item.action }</span>
        <span className = 'address'>{ item.address }</span>
    </div>
));

export default Contacts;
