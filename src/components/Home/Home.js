import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Spinner from "../elements/Spinner/Spinner";
import FilterBar from "../elements/FilterBar/FilterBar"
import {HomeCategorySelect,HomeStyles,HomeGrid,HomeComponent,HomeFilter} from "./HomeStyles"

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

    <HomeStyles>
      {loading ? <Spinner /> : null}
      {heroImage ? (
        <HomeComponent>
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
              heroImage.backdrop_path
            }`}
            title={heroImage.original_title}
            text={heroImage.overview}
          />
          <SearchBar search={searchMovies} />
         <HomeFilter> <HomeCategorySelect>Select movies category:</HomeCategorySelect> <FilterBar handleClick={handleClick}/></HomeFilter>
         
        </HomeComponent>
      ) : null}
  
      { searchTerm ? 
      <HomeGrid>
        
      <FourColGrid
        header={searchTerm ? `Search Result: ${searchTerm}` : title ? title.toUpperCase() : "Popular Movies"}
        loading={loading}
        movies={movies}
      />

    </HomeGrid> 
    :  <FourColGrid
    header={searchTerm ? `Search Result: ${searchTerm}` : title ? `${title.charAt(0).toUpperCase() + title.slice(1)} Movies` : "Popular Movies"}
    loading={loading}
    movies={movies}
  />
      }

    </HomeStyles>
  );
};

export default Home;


// import React from "react";
// import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
// import HeroImage from "../elements/HeroImage/HeroImage";
// import SearchBar from "../elements/SearchBar/SearchBar";
// import FourColGrid from "../elements/FourColGrid/FourColGrid";
// import Spinner from "../elements/Spinner/Spinner";
// import FilterBar from "../elements/FilterBar/FilterBar"
// import {HomeCategorySelect,HomeStyles,HomeGrid,HomeComponent,HomeFilter} from "./HomeStyles"

// const Home = ({
//   movies,
//   heroImage,
//   loading,
//   searchTerm,
//   searchMovies,
//   handleClick,
//   title
// }) => {
//   return (

//     <HomeStyles>
//       {loading ? <Spinner /> : null}
//       {heroImage ? (
//         <HomeComponent>
//           <HeroImage
//             image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
//               heroImage.backdrop_path
//             }`}
//             title={heroImage.original_title}
//             text={heroImage.overview}
//           />
//           <SearchBar search={searchMovies} />
//          <HomeFilter> <HomeCategorySelect>Select movies category:</HomeCategorySelect> <FilterBar handleClick={handleClick}/></HomeFilter>
         
//         </HomeComponent>
//       ) : null}
  
//       { searchTerm ? 
//       <HomeGrid>
        
//       <FourColGrid
//         header={searchTerm ? `Search Result: ${searchTerm}` : title ? title.toUpperCase() : "Popular Movies"}
//         loading={loading}
//         movies={movies}
//       />

//     </HomeGrid> 
//     :  <FourColGrid
//     header={searchTerm ? `Search Result: ${searchTerm}` : title ? `${title.charAt(0).toUpperCase() + title.slice(1)} Movies` : "Popular Movies"}
//     loading={loading}
//     movies={movies}
//   />
//       }

//     </HomeStyles>
//   );
// };

// export default Home;
