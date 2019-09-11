import React from "react";
import "./Home.css";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Spinner from "../elements/Spinner/Spinner";
import CenterMode from "../elements/Slider/Slider";
import Footer from "../Footer/Footer";

const Home = ({
  movies,
  heroImage,
  loading,
  searchTerm,
  searchMovies,
  upcomingMovies,
  actionMovies,
  comedyMovies,
  search
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
        </div>
      ) : null}
      
      { searchTerm ? 
      <div className="rmdb-home-grid">
      <FourColGrid
        header={searchTerm ? "Search Result" : "Popular Movies"}
        loading={loading}
        movies={movies}
      />
    </div>
      :(<div className="rmdb-home-component__slider-container">
      <CenterMode title="POPULAR MOVIES" movies={movies} loading={loading}/>
      <CenterMode title="UPCOMING MOVIES" upcomingMovies={upcomingMovies} loading={loading}/>
      <CenterMode title="ACTION MOVIES" actionMovies={actionMovies} loading={loading}/>
      <CenterMode title="COMEDY MOVIES" comedyMovies={comedyMovies} loading={loading}/>
      </div>)
      }

      { loading ? null : <Footer />}
    </div>
  );
};

export default Home;
