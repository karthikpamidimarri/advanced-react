import React from 'react';
import ArticleList from './ArticleList';

export default class App extends React.Component{

    state = this.props.store.getState()

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

