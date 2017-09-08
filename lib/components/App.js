import React from 'react';
import DataApi from 'state-api';
import axios from 'axios';
import ArticleList from './ArticleList';

export default class App extends React.Component{

    state = {
        articles: this.props.initialData.articles,
        authors: this.props.initialData.authors
    }

    async componentDidMount(){
        const resp = await axios.get('/data');
        console.log(resp);
        const api = new DataApi(resp.data.data);

        this.setState(() => ({
            articles: api.getArticles(),
            authors: api.getAuthors()
        }));
    }

    articleActions={
        lookUpAuthor : (authorId) => this.state.authors[authorId]
    }
    render(){

        return(
            <ArticleList
                articles = {this.state.articles}
                articleAction = {this.articleActions}
            />
        );
    }
}
