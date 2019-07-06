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
      {heroImage ? (
        <div>
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
      {loading ? <Spinner /> : null}
      <FourColGrid
        header={searchTerm ? "Search Result" : "Popular Movies"}
        loading={loading}
        movies={movies}
      />
    </div>
      :(<div>
      <CenterMode title="POPULAR MOVIES" movies={movies} />
      <CenterMode title="UPCOMING MOVIES" upcomingMovies={upcomingMovies} />
      <CenterMode title="ACTION MOVIES" actionMovies={actionMovies} />
      <CenterMode title="COMEDY MOVIES" comedyMovies={comedyMovies} />
      </div>)
      }

      <Footer />
    </div>
  );
};

export default Home;
