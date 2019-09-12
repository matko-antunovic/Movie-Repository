import {
  GET_MOVIE,
  SHOW_LOADING_SPINNER,
  CLEAR_MOVIE,
  GET_SIMILAR,
  GET_TRAILERS,
  GET_REVIEW,
} from "../actions/movieActions";

const initialState = {
  movie: null,
  actors: null,
  directors: [],
  loading: false,
  similarMovies:[],
  trailers:null,
  review:{}
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
        actors: action.payload.actors,
        loading: false,
        directors: action.payload.directors
      };
      
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      };

    case CLEAR_MOVIE:
      return {
        ...state,
        movie: null,
        actors: null,
        directors: [],
        similarMovies:[]
      };

    case GET_SIMILAR:
      return{
        ...state,
        similarMovies:action.payload
      }  
    case GET_TRAILERS:
      return{
        ...state,
        trailers:action.payload
      }
    case GET_REVIEW:
      return{
        ...state,
        review:action.payload
      }
    default:
      return state;
  }
  
};
export default movieReducer;
