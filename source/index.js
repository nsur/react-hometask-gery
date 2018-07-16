// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

// Components
import Resume from './containers/Resume';

ReactDOM.render(<Resume />, document.getElementById('app'));

// папки
// containers - компоненти які мають доступ до даних (за звичай через redux, зараз це .json)
// components - компоненти які тільки відображають дані але самі їх отримують через props
