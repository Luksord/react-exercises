import { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';
function AppNew() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // state = {
  //   articles: [],
  //   isLoading: false,
  //   error: '',
  //   currentPage: 1,
  // };
}

export default AppNew;
