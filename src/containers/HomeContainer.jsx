import React, { Component } from 'react'
import {connect} from "react-redux";
import Home from "../components/Home/Home"
import {HomeContainerStyles,LoadMore} from "../components/Home/HomeStyles"
import {withRouter,Link} from "react-router-dom"
import {getPopularMovies,getUpcomingMovies,getHighestRated,showLoadingSpinner,searchMovies,clearMovies,loadMoreMovies,getGenre,getMovies,guestSession} from "../actions/homeActions"

class HomeContainer extends Component {

    state = {
        choosen:null
      };
    
      handleClick=(e)=>{
          e.preventDefault();
          this.setState({choosen:e.target.name},()=>this.getMovies(this.state.choosen))
      }
    

    componentDidMount(){
        this.props.showLoadingSpinner();
       this.getMovies();
    }



    getMovies=(state)=>{
       {!this.props.home.authToken && this.props.guestSession()}
        this.props.clearMovies();
       if(state==="action" || state==="comedy" || state==="crime" || state==="drama" || state==="romance" || state==="documentary"){
        this.props.getGenre(state);
       }else if(state==="upcoming"){
        this.props.getUpcomingMovies();
       }else if(state==="top rated"){
        this.props.getHighestRated();
       }else{
         this.props.getPopularMovies()
       }

    }

    searchMovies=(searchTerm)=>{
        this.props.clearMovies();
        this.props.showLoadingSpinner();
        this.props.searchMovies(searchTerm);
    }

    loadMoreMovies=()=>{
        const {searchTerm,currentPage}=this.props.home;
        this.props.showLoadingSpinner();
        this.props.loadMoreMovies(searchTerm,currentPage)
    }

    render() {
      
        return (
            <HomeContainerStyles>
           
                <Home
                 {...this.props.home}
                 searchMovies={this.searchMovies}
                 loadMoreMovies={this.loadMoreMovies}
                 searchTerm={this.props.home.searchTerm}
                 handleClick={this.handleClick}
                 moviesToShow={this.props.home.moviesToShow}
                 title={this.state.choosen}
                 />
               <LoadMore onClick={this.loadMoreMovies}>Load More</LoadMore>
            </HomeContainerStyles>
        )
    }
}

const mapStateToProps=(state)=>{
    return {home:state.home}
}

const mapDispatchToProps=(dispatch)=>({
    getPopularMovies:()=>{ dispatch(getPopularMovies())},
    getUpcomingMovies:()=>{dispatch(getUpcomingMovies())},
    getHighestRated:()=>{dispatch(getHighestRated())},
    getGenre:(genre)=>{dispatch(getGenre(genre))},
    showLoadingSpinner:()=>{ dispatch(showLoadingSpinner())},
    searchMovies:(searchTerm)=>{ dispatch(searchMovies(searchTerm))},
    clearMovies:()=>{ dispatch(clearMovies())},
    guestSession:()=>{dispatch(guestSession())},
    loadMoreMovies:(searchTerm,currentPage)=>{dispatch(loadMoreMovies(searchTerm,currentPage))}
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomeContainer));

