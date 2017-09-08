import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

/*const initialData = {
    articles : {},
    authors : {}
};*/

ReactDOM.render(
    // accessing initalData from globally setted instead of empty object
    <App initialData={window.initialData}/>,
    document.getElementById('root')
);