import {
  GET_MOVIE,
  SHOW_LOADING_SPINNER,
  CLEAR_MOVIE
} from "../actions/movieActions";

const initialState = {
  movie: null,
  actors: null,
  directors: [],
  loading: false
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
        directors: []
      };

    default:
      return state;
  }
  
};
export default movieReducer;
