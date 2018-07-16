// Core
import React from 'react';

// Components
import Row from '../Row';

// тут можна було прямо в скобках деструктуризувати props і дістати data
const Content = (props) => {
    const { dataTop, dataBottom } = props.data;

    return (
        <div className = 'content'>
            <Row data = { dataTop } />
            <Row data = { dataBottom } />
        </div>
    );
};

export default Content;
