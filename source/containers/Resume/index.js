// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import Header from '../../components/Header';
import Content from '../../components/Content';

// Data
import header from '../../data/header.json';
import content from '../../data/content.json';

@hot(module)
export default class Resume extends Component {
    render () {
        return (
            <div className = 'resume'>
                <Header data = { header } />
                <Content data = { content } />
            </div>
        );
    }
}

// корневі контейнери краще вертати в div із указанням класу
