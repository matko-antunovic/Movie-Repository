import {
  GET_MOVIE,
  SHOW_LOADING_SPINNER,
  CLEAR_MOVIE,
  GET_SIMILAR,
  GET_TRAILERS,
  GET_REVIEW,
  ADD_MOVIE,
  REMOVE_MOVIE,
  GET_RATED,
} from "../actions/movieActions";
import {checkDuplicate} from "../config"

const initialState = {
  movie: null,
  actors: null,
  directors: [],
  loading: false,
  similarMovies:[],
  trailers:null,
  review:{},
  watchlist:[],
  ratings:[],
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
      case GET_RATED:
        return {
          ...state,
          ratings:action.payload
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
    case ADD_MOVIE:
      return{
        ...state,
        watchlist:checkDuplicate(state.watchlist,action.payload),
      }

    case REMOVE_MOVIE:
      return{
        ...state,
        watchlist:state.watchlist.filter(w=>w.id !== action.payload)
      }
      
    default:
      return state;
  }
  
};
export default movieReducer;
