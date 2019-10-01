import {
  SHOW_LOADING_SPINNER,
  CLEAR_MOVIES,
  SEARCH_MOVIES,
  GET_POPULAR_MOVIES,
  GET_UPCOMING_MOVIES,
  LOAD_MORE_MOVIES,
  GET_ACTION_MOVIES,
  GET_COMEDY_MOVIES,
  GET_HIGHETST_RATED,
  GET_DRAMA_MOVIES,
  GET_GENRE,
  GET_TOKEN,
} from "../actions/homeActions";

const initialState = {
  movies: [],
  heroImage: null,
  loading: false,
  currentPage: 0,
  totalPages: 0,
  searchTerm: "",
  authToken:0,
  rated:[],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        heroImage: state.heroImage || action.payload.results[0],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: ""
      };
      case GET_TOKEN:
        return {
          ...state,
          authToken:action.payload
        };
     
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        heroImage: state.heroImage || action.payload.results[0],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: ""
      };

      case GET_HIGHETST_RATED:
        return {
          ...state,
          movies: action.payload.results,
          heroImage: state.heroImage || action.payload.results[0],
          loading: false,
          currentPage: action.payload.page,
          totalPages: action.payload.total_pages,
          searchTerm: ""
        };

    case GET_COMEDY_MOVIES:
      return{
        ...state,
        movies: action.payload.results,
        heroImage: state.heroImage || action.payload.results[0],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: ""
      };

      case GET_GENRE:
        return{
          ...state,
          movies: action.payload.results,
          heroImage: state.heroImage || action.payload.results[0],
          loading: false,
          currentPage: action.payload.page,
          totalPages: action.payload.total_pages,
          searchTerm: ""
        };
  

    case GET_DRAMA_MOVIES:
      return{
        ...state,
        movies: action.payload.results,
        heroImage: state.heroImage || action.payload.results[0],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: ""
      };

    case GET_ACTION_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        heroImage: state.heroImage || action.payload.results[0],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: ""
      };
    case LOAD_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload.data.results,
        loading: false,
        currentPage: action.payload.data.page,
        totalPages: action.payload.data.total_pages,
        searchTerm: action.payload.searchTerm
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
        moviesToShow:[]
      };
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default homeReducer;

// import {
//   SHOW_LOADING_SPINNER,
//   CLEAR_MOVIES,
//   SEARCH_MOVIES,
//   GET_POPULAR_MOVIES,
//   GET_UPCOMING_MOVIES,
//   LOAD_MORE_MOVIES,
//   GET_ACTION_MOVIES,
//   GET_COMEDY_MOVIES,
//   GET_HIGHETST_RATED,
//   GET_DRAMA_MOVIES,
//   GET_GENRE,
// } from "../actions/homeActions";

// const initialState = {
//   movies: [],
//   heroImage: null,
//   loading: false,
//   currentPage: 0,
//   totalPages: 0,
//   searchTerm: "",
  
// };

// const homeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_POPULAR_MOVIES:
//       return {
//         ...state,
//         movies: action.payload.results,
//         heroImage: state.heroImage || action.payload.results[0],
//         loading: false,
//         currentPage: action.payload.page,
//         totalPages: action.payload.total_pages,
//         searchTerm: ""
//       };
//     case GET_UPCOMING_MOVIES:
//       return {
//         ...state,
//         movies: action.payload.results,
//         heroImage: state.heroImage || action.payload.results[0],
//         loading: false,
//         currentPage: action.payload.page,
//         totalPages: action.payload.total_pages,
//         searchTerm: ""
//       };

//       case GET_HIGHETST_RATED:
//         return {
//           ...state,
//           movies: action.payload.results,
//           heroImage: state.heroImage || action.payload.results[0],
//           loading: false,
//           currentPage: action.payload.page,
//           totalPages: action.payload.total_pages,
//           searchTerm: ""
//         };

//     case GET_COMEDY_MOVIES:
//       return{
//         ...state,
//         movies: action.payload.results,
//         heroImage: state.heroImage || action.payload.results[0],
//         loading: false,
//         currentPage: action.payload.page,
//         totalPages: action.payload.total_pages,
//         searchTerm: ""
//       };

//       case GET_GENRE:
//         return{
//           ...state,
//           movies: action.payload.results,
//           heroImage: state.heroImage || action.payload.results[0],
//           loading: false,
//           currentPage: action.payload.page,
//           totalPages: action.payload.total_pages,
//           searchTerm: ""
//         };
  

//     case GET_DRAMA_MOVIES:
//       return{
//         ...state,
//         movies: action.payload.results,
//         heroImage: state.heroImage || action.payload.results[0],
//         loading: false,
//         currentPage: action.payload.page,
//         totalPages: action.payload.total_pages,
//         searchTerm: ""
//       };

//     case GET_ACTION_MOVIES:
//       return {
//         ...state,
//         movies: action.payload.results,
//         heroImage: state.heroImage || action.payload.results[0],
//         loading: false,
//         currentPage: action.payload.page,
//         totalPages: action.payload.total_pages,
//         searchTerm: ""
//       };
//     case LOAD_MORE_MOVIES:
//       return {
//         ...state,
//         movies: [...state.movies, ...action.payload.results],
//         loading: false,
//         currentPage: action.payload.page,
//         totalPages: action.payload.total_pages
//       };
//     case SEARCH_MOVIES:
//       return {
//         ...state,
//         movies: action.payload.data.results,
//         loading: false,
//         currentPage: action.payload.data.page,
//         totalPages: action.payload.data.total_pages,
//         searchTerm: action.payload.searchTerm
//       };
//     case CLEAR_MOVIES:
//       return {
//         ...state,
//         movies: [],
//         moviesToShow:[]
//       };
//     case SHOW_LOADING_SPINNER:
//       return {
//         ...state,
//         loading: true
//       };
//     default:
//       return state;
//   }
// };

// export default homeReducer;
