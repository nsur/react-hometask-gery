// Core
import React from 'react';

// Data
import avatar from '../../theme/assets/images/elon-musk';

// використав деструктуризацію props
const Header = ({ data }) => (
    <div className = 'header'>
        <div>
            <h1>{ data.name }</h1>
            <span>{ data.activity }</span>
            <p>{ data.description }</p>
        </div>
        <img src = { avatar } />
    </div>
);

export default Header;

// Це так званий "чистий компонент", у нього немає свого стану
// і не працює із життєвим циклом (ComponentDidMount, ComponentWillUnMount, etc.)
// тому можна зробити просто функцію яка вертає верстку із дамини
