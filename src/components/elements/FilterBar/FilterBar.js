import React from "react";
import {FilterBarButtonStyles,FilterBarStyles} from "./FilterStyles"

const FilterBar=({handleClick})=> {

     const categories=["popular","upcoming","top rated","action","comedy","drama","documentary","crime", "romance"];

     const click=(e)=>{

         handleClick(e)
     }
    return (
      <FilterBarStyles>
          {categories.map((cat,i)=><FilterBarButtonStyles key={i} name={cat} onClick={click}>{cat}</FilterBarButtonStyles>)}
      </FilterBarStyles>
    );
  }

export default FilterBar;


