import axios from "axios";
import { API_URL, API_KEY } from "../config";
export const SHOW_LOADING_SPINNER = "SHOW_LOADING_SPINNER";
export const GET_MOVIE = "GET_MOVIE";
export const CLEAR_MOVIE = "CLEAR_MOVIE";
export const GET_SIMILAR = "GET_SIMILAR";
export const GET_TRAILERS = "GET_TRAILERS";
export const GET_REVIEW="GET_REVIEW"
export const ADD_MOVIE="ADD_MOVIE"
export const RATE_MOVIE="RATE_MOVIE"
export const REMOVE_MOVIE="REMOVE_MOVIE"
export const GET_RATED="GET_RATED"

export const clearMovie = () => {
  return {
    type: CLEAR_MOVIE,
    payload: null
  };
};
export const showLoadingSpinner = () => {
  return {
    type: SHOW_LOADING_SPINNER,
    payload: null
  };
};

export const rateMovie = (rating,token,params)=>async (dispatch)=> {
  const body={
    "value": rating
  }
  await axios.post(`${API_URL}movie/${params}/rating?api_key=${API_KEY}&guest_session_id=${token}`, body)
  .then(res=> {
    if(res.data.status_message === "Success."){
      setTimeout(()=>dispatch(getRatedMovies(token)),5000)
    }
}
)
};


export const getRatedMovies = (guestSessionId) => async (dispatch) => {
  const endpoint = `${API_URL}guest_session/${guestSessionId}/rated/movies?api_key=${API_KEY}&timestamp=${new Date().getTime()}, { cache: "no-cache"}`;
  const response = await axios(endpoint);
  dispatch({
    type: GET_RATED,
    payload: response.data.results
  });
};


export const getMovie = movieId => async dispatch => {
  let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=eng-US`;
  let newState = {};

  const response = await axios.get(endpoint);

  if (response.status_code) {
    newState = {};
  } else {
    newState = { movie: response.data };
    endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    const res = await axios.get(endpoint);
    const directors = res.data.crew.filter(member => member.job === "Director");
    newState.actors = res.data.cast;
    newState.directors = directors;
  }

  dispatch({
    type: GET_MOVIE,
    payload: newState
  });
};

export const getSimilarMovies = movieId => async dispatch => {
  let endpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await axios.get(endpoint);

  dispatch({
    type: GET_SIMILAR,
    payload: response.data.results
  });
};

export const getMovieVideo = movieId => async dispatch => {
  let endpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;

  const response = await axios.get(endpoint);

  dispatch({
    type: GET_TRAILERS,
    payload: response.data.results
  });
};

export const getMovieReview = movieId => async dispatch => {
  let endpoint = `${API_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await axios.get(endpoint);

  dispatch({
    type: GET_REVIEW,
    payload: response.data.results[0]
  });
};

export const addToWatchlist=(movie)=>{

  return{
    type:ADD_MOVIE,
    payload:movie
  }
}

export const removeFromWatchlist = (id) => {

  return {
    type: REMOVE_MOVIE,
    payload: id
  };
};
