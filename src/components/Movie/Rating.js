import React from 'react'
import Ratings from 'react-ratings-declarative';

class Rating extends React.Component {

render(){
    return (
        <div>
            <div>
            <Ratings
               widgetDimensions="25px"
            rating={this.props.rate}
            widgetRatedColors="red"
            changeRating={this.props.changeRating}
          >
               <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
              <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
               <Ratings.Widget />
          </Ratings>
          </div>
        </div>
    )
}
}



export default (Rating)
