import React from 'react';
import "./Home.css";
import {IMAGE_BASE_URL, BACKDROP_SIZE} from "../../config";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../elements/Spinner/Spinner";

 
const Home = ({movies,heroImage,loading,currentPage,totalPages,searchTerm,searchMovies,loadMoreMovies}) => (
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
    <div className="rmdb-home-grid">
      <FourColGrid
        header={searchTerm ? "Search Result" : "Popular Movies"}
        loading={loading}
        movies={movies}
      />
      {loading ? <Spinner /> : null}
      {currentPage <= totalPages && !loading ? (
        <LoadMoreBtn text="Load more" onClick={loadMoreMovies} />
      ) : null}
    </div>
  </div>
);
export default Home;