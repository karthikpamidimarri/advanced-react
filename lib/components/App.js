import React from 'react';
import DataApi from 'state-api';
import { data } from '../testData.json';
import ArticleList from './ArticleList';


const api = new DataApi(data);

export default class App extends React.Component{

    constructor(){
        super();
        this.state = {
            articles : api.getArticles(),
            authors : api.getAuthors()
        };
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
