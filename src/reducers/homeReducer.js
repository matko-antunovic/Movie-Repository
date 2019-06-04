import {SHOW_LOADING_SPINNER,CLEAR_MOVIES,SEARCH_MOVIES,GET_POPULAR_MOVIES,LOAD_MORE_MOVIES} from "../actions/homeActions"

const initialState={
        movies:[],
        heroImage: null,
        loading:false,
        currentPage:0,
        totalPages:0,
        searchTerm:""
    }

const homeReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_POPULAR_MOVIES:
            return{
                ...state,
               movies:action.payload.results,
               heroImage: state.heroImage || action.payload.results[0],
               loading:false,
               currentPage:action.payload.page,
               totalPages:action.payload.total_pages,
               searchTerm:""
            }
        case LOAD_MORE_MOVIES:
            return{
                ...state,
                movies:[...state.movies, ...action.payload.results],
                loading:false,
                currentPage:action.payload.page,
                totalPages:action.payload.total_pages
            }
        case SEARCH_MOVIES:
            return{
                ...state,
                movies:action.payload.results,
                loading:false,
                currentPage:action.payload.page,
                totalPages:action.payload.total_pages,
                searchTerm:action.payload.searchTerm
            }
        case CLEAR_MOVIES:
            return{
                ...state,movies:[]
            }
        case SHOW_LOADING_SPINNER:
            return{
                ...state,
                loading:true
            }
        default:
            return state;
    }
} 

export default homeReducer;
