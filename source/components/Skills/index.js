// Core
import React from 'react';

import classnames from 'classnames';

// генерує масив із елементами від 1 до 10
const arr = Array.from(new Array(10), (val, index) => index + 1);

const Skills = ({ items }) => items.map((item, index) => (
    <div className = 'skill' key = { index }>
        <span>{ item.name }</span>
        <ul>
            {
                arr.map((value) => (
                    <li
                        className = { classnames({ 'inactive': value > item.active }) }
                        // className = { value > item.active ? 'inactive' : '' }
                        key = { value }
                    />
                ))
            }
        </ul>
    </div>
));

export default Skills;
