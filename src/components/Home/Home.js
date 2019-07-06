import React from 'react';
import "./Home.css";
import {IMAGE_BASE_URL, BACKDROP_SIZE} from "../../config";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Spinner from "../elements/Spinner/Spinner";
import CenterMode from "../elements/Slider/Slider"
import Upcoming from "../elements/Slider/Upcoming"
import Footer from '../Footer/Footer';
import Action from "../elements/Slider/Action";
 
const Home = ({movies,heroImage,loading,searchTerm,searchMovies,upcomingMovies,actionMovies}) => {

  return(
    <div className="rmdb-home">
      {heroImage ? (
        <div>
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
            title={heroImage.original_title}
            text={heroImage.overview}
          />
          <SearchBar search={searchMovies} />
        </div>
      ) : null}
  
        <CenterMode
        movies={movies} 
        />

        <Upcoming
        upcomingMovies={upcomingMovies}/>

        <Action
        actionMovies={actionMovies}/>

  
      <div className="rmdb-home-grid">

        {/* <FourColGrid
          header={searchTerm ? "Search Result" : "Popular Movies"}
          loading={loading}
          movies={movies}
        /> */}
        {loading ? <Spinner /> : null}
        
        </div>

        <Footer/>
    </div>
  );
}



export default Home;
