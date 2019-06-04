import { API_URL, API_KEY } from "../config";

import axios from "axios";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const LOAD_MORE_MOVIES = "LOAD_MORE_MOVIES";
export const CLEAR_MOVIES = "CLEAR_MOVIES";

export const SHOW_LOADING_SPINNER = "SHOW_LOADING_SPINNER";

export const getPopularMovies = () => async (dispatch, getState) => {
  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios(endpoint);

  dispatch({
    type: GET_POPULAR_MOVIES,
    payload: response.data
  });
};

export const searchMovies = searchTerm => async dispatch => {
  let endpoint;

  if (searchTerm === "") {
    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
  }

  const res = await axios(endpoint);
  const response = { ...res, searchTerm };

  dispatch({
    type: SEARCH_MOVIES,
    payload: response.data
  });
};

export const loadMoreMovies = (searchTerm, currentPage) => async dispatch => {
  let endpoint;

  if (searchTerm === "") {
    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage +
      1}`;
  } else {
    endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage +
      1}`;
  }

  const response = await axios(endpoint);

  dispatch({
    type: LOAD_MORE_MOVIES,
    payload: response.data
  });
};

export const clearMovies = () => {
  return {
    type: CLEAR_MOVIES,
    payload: null
  };
};

export const showLoadingSpinner = () => {
  return {
    type: SHOW_LOADING_SPINNER,
    payload: null
  };
};
