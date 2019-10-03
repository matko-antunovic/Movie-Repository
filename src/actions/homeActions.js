import { API_URL, API_KEY } from "../config";
import axios from "axios";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const LOAD_MORE_MOVIES = "LOAD_MORE_MOVIES";
export const CLEAR_MOVIES = "CLEAR_MOVIES";
export const GET_UPCOMING_MOVIES="GET_UPCOMING_MOVIES";
export const SHOW_LOADING_SPINNER = "SHOW_LOADING_SPINNER";
export const GET_ACTION_MOVIES = "GET_ACTION_MOVIES";
export const GET_COMEDY_MOVIES="GET_COMEDY_MOVIES";
export const GET_HIGHETST_RATED="GET_HIGHETST_RATED"
export const GET_DRAMA_MOVIES="GET_DRAMA_MOVIES"
export const GET_GENRE="GET_GENRE"
export const GET_TOKEN="GET_TOKEN"
export const GET_RANDOM="GET_RANDOM"

export const guestSession = () => async (dispatch) => {
  const endpoint = `${API_URL}authentication/guest_session/new?api_key=${API_KEY}`;
  const response = await axios(endpoint);

  dispatch({
    type: GET_TOKEN,
    payload: response.data.guest_session_id
  });
};

export const getPopularMovies = () => async (dispatch) => {
  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios(endpoint);

  dispatch({
    type: GET_POPULAR_MOVIES,
    payload: response.data
  });
};
export const getUpcomingMovies = () => async (dispatch) => {
  const endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios(endpoint);

  dispatch({
    type: GET_UPCOMING_MOVIES,
    payload: response.data
  });
};

export const getGenre = (genre) => async (dispatch) => {
  const genres={
    comedy:35,
    drama:18,
    action:28,
    documentary:99,
    crime:80,
    romance:10749
  }
  const endpoint =`${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=${genres[genre]}`;
  const response = await axios(endpoint);

  dispatch({
    type: GET_GENRE,
    payload: response.data
  });
};


export const getRandom = (genre) => async (dispatch) => {
  console.log("GENTER",genre)
  const genres={
    comedy:35,
    drama:18,
    action:28,
    documentary:99,
    crime:80,
    romance:10749
  }
  let page=Math.floor(Math.random() * 200); 
 
  const endpoint =`${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${genres[genre]}`
  console.log("endpoint" ,endpoint)
  const response = await axios(endpoint);

  dispatch({
    type: GET_RANDOM,
    payload: response.data
  });
};



export const getHighestRated = () => async (dispatch) => {
  const endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios(endpoint);

  dispatch({
    type: GET_HIGHETST_RATED,
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
    payload: response
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

