import axios from "axios";
import { API_URL, API_KEY } from "../config";

export const SHOW_LOADING_SPINNER="SHOW_LOADING_SPINNER"
export const GET_MOVIE="GET_MOVIE";
export const CLEAR_MOVIE="CLEAR_MOVIE"


export const clearMovie=()=>{
   return{
        type:CLEAR_MOVIE,
        payload:null
   }
}
export const showLoadingSpinner = () => {
    return {
      type: SHOW_LOADING_SPINNER,
      payload: null
    };
  };

export const getMovie=(movieId)=>async dispatch=>{
 
    let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=eng-US`;
    let newState = {};

    const response = await axios.get(endpoint);

    if (response.status_code) {
      newState={};
    } else {
      newState = { movie: response.data };
      endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

      const res = await axios.get(endpoint);
      const directors = res.data.crew.filter(
        member => member.job === "Director"
      );
      newState.actors = res.data.cast;
      newState.directors = directors;
      
    }

    dispatch({
        type: GET_MOVIE,
        payload: newState
      });

}
