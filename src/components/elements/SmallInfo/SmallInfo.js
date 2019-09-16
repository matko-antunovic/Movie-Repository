import React from "react";
import { withRouter } from "react-router-dom";
import HoveredMovie from "../HoveredMovie/HoveredMovie";

const SmallInfo = ({ movieSimilar0, hovered, history, match }) => {
  return (
    <React.Fragment>
      {(hovered && hovered.id != match.params.movieId) ? <HoveredMovie movie={hovered} history={history} /> : <HoveredMovie movie={movieSimilar0} history={history} /> }
    </React.Fragment>
  );
};

export default withRouter(SmallInfo);
