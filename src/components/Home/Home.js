import React from "react";
import "./Home.css";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Spinner from "../elements/Spinner/Spinner";
import FilterBar from "../elements/FilterBar/FilterBar"

const Home = ({
  movies,
  heroImage,
  loading,
  searchTerm,
  searchMovies,
  handleClick,
  title
}) => {

  return (

    <div className="rmdb-home">
      {loading ? <Spinner /> : null}
      {heroImage ? (
        <div className="rmdb-home-component">
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
              heroImage.backdrop_path
            }`}
            title={heroImage.original_title}
            text={heroImage.overview}
          />
          <SearchBar search={searchMovies} />
          <FilterBar handleClick={handleClick}/>
        </div>
      ) : null}
  
      { searchTerm ? 
      <div className="rmdb-home-grid">
        
      <FourColGrid
        header={searchTerm ? `Search Result: ${searchTerm}` : title ? title.toUpperCase() : "Popular Movies"}
        loading={loading}
        movies={movies}
      />

    </div> 
    :  <FourColGrid
    header={searchTerm ? `Search Result: ${searchTerm}` : title ? `${title.charAt(0).toUpperCase() + title.slice(1)} Movies` : "Popular Movies"}
    loading={loading}
    movies={movies}
  />
      }

    </div>
  );
};

export default Home;
