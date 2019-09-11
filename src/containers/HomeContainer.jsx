import React, { Component } from 'react'
import {connect} from "react-redux";
import Home from "../components/Home/Home"
import{getPopularMovies,getComedyMovies,getActionMovies,getUpcomingMovies,showLoadingSpinner,searchMovies,clearMovies,loadMoreMovies} from "../actions/homeActions"


class HomeContainer extends Component {

    componentDidMount(){
        this.props.showLoadingSpinner();
       this.getMovies();
    }

    getMovies=()=>{
      
       this.props.getPopularMovies(); 
       this.props.getUpcomingMovies();
       this.props.getActionMovies();
       this.props.getComedyMovies();
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
            <div className="home-container">
                <Home
                 {...this.props.home}
                 searchMovies={this.searchMovies}
                 loadMoreMovies={this.loadMoreMovies}
                 searchTerm={this.props.home.searchTerm}
                 />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {home:state.home}
}

const mapDispatchToProps=(dispatch)=>({
    getPopularMovies:()=>{ dispatch(getPopularMovies())},
    getUpcomingMovies:()=>{dispatch(getUpcomingMovies())},
    getComedyMovies:()=>{dispatch(getComedyMovies())},
    getActionMovies:()=>{dispatch(getActionMovies())},
    showLoadingSpinner:()=>{ dispatch(showLoadingSpinner())},
    searchMovies:(searchTerm)=>{ dispatch(searchMovies(searchTerm))},
    clearMovies:()=>{ dispatch(clearMovies())},
    loadMoreMovies:(searchTerm,currentPage)=>{dispatch(loadMoreMovies(searchTerm,currentPage))}
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
