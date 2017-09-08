import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import DataApi from 'state-api';

import App from 'components/App';
import config from 'config';

const serverRender = async () => {
    const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    console.log(`response for articles ${resp.data.data.articles[0].id}`);
    console.log(`response for authors  ${resp.data.data.authors[0].id}`);
    const api = new DataApi(resp.data.data);

    const initialData = {
        articles: api.getArticles(),
        authors: api.getAuthors(),
    };

    return ReactDOMServer.renderToString(
        <App initialData={initialData} />
    );
};

export default serverRender;