import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount(){
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnMount(){
    this.props.store.unSubscribe(this.subscriptionId);
  }
  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm)
          || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <TimeStamp timeStamp={this.state.timeStamp}/>
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;
