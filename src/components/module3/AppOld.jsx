import { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';
import ContentLoader from 'react-content-loader';

import './App.css';
import ArticleList from './components/ArticleList';
import api from './utils/getArticles';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';
class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: '',
    currentPage: 1,
  };

  timer = null;

  async componentDidMount() {
    this.timer = setInterval(() => {
      this.handleCurrentPageUpdate();
    }, 10000);
    await this.getInitialData();
  }

  async componentDidUpdate() {
    await this.getInitialData();
  }

  getInitialData = async () => {
    const query = `react&page=${this.state.currentPage}`;
    try {
      const articles = await api.fetchArticlesWithQuery(query);
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    const oldState = this.state;

    if (
      nextState.articles[0]?.title === oldState.articles[0]?.title &&
      nextState.currentPage === oldState.currentPage
    ) {
      return false;
    }

    return true;
  }

  handleCurrentPageUpdate = () => {
    this.setState(state => {
      return {
        currentPage: state.currentPage + 1,
      };
    });
  };

  handleClick = () => {
    this.handleCurrentPageUpdate();
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <ContentLoader />}
        {articles.length > 0 && <ArticleList articles={articles} />}
        <button onClick={this.handleClick}>Next page</button>
      </>
    );
  }
}

export default App;
