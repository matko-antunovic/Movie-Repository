// https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

//https://api.themoviedb.org/3/movie/550?api_key=da70681c8adf61ebb276dc1660aded55
const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "da70681c8adf61ebb276dc1660aded55";


// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL ="http://image.tmdb.org/t/p/";

const BACKDROP_SIZE ="w1280";

const POSTER_SIZE = "w500";

const SMALL_SIZE="w200"

export const checkDuplicate=(state,movie)=>{
  
  let existing=state.filter(w=>w.id===movie.id);
  

  if(!existing.length>0){
    return  [...state,movie]
  }
  return [...state];
  
}


export const limitText = (text, limit) => {
  const newtext = [];
  if (text.length > limit) {
    text.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newtext.push(cur);
      }
      return acc + cur.length;
    }, 0);
  } else {
    newtext.push(text);
  }

  return ` "${newtext.join(" ")} ..." Read More`;
};


export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SMALL_SIZE
}



