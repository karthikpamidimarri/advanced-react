import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

export default class App extends React.Component{

    state = this.props.store.getState();

    static childContextTypes = {
        store: PropTypes.object,
    };

    getChildContext(){
        return{
            store : this.props.store
        };
    }
    render(){
        return (
            <div>
                <SearchBar />
                <ArticleList
                    articles={this.state.articles}
                    store={this.props.store}
                />
            </div>
        );
    }
}

