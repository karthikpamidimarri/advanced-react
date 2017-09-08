import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import StateApi from 'state-api';


const store = new StateApi(window.initialData);

ReactDOM.render(
    // accessing initalData from globally setted instead of empty object
    <App store={store} />,
    document.getElementById('root')
);