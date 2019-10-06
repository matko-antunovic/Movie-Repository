import React from "react";
import {FilterBarStyles} from "./FilterStyles"
import Add from "../../reusables/Add"

const FilterBar=({handleClick})=> {

     const categories=["popular","upcoming","top rated","action","comedy","drama","documentary","crime", "romance"];

     const onClick=(e)=>{
         handleClick(e)
     }
    return (
      <FilterBarStyles>
          {categories.map((cat,i)=><Add radius={"8px"} key={i} name={cat} handleClick={onClick}>{cat}</Add>)}
      </FilterBarStyles>
    );
  }

export default FilterBar;


