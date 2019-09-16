import React from "react";
import "./FilterBar.css"

const FilterBar=({handleClick})=> {

     const categories=["popular","upcoming","top rated","action","comedy","drama","documentary","crime", "romance"];

     const click=(e)=>{

         handleClick(e)
     }
    return (
      <div className="FilterBar">
          {categories.map((cat,i)=><button className="FilterBar__categories-button" key={i} name={cat} onClick={click}>{cat}</button>)}
      </div>
    );
  }

export default FilterBar;


