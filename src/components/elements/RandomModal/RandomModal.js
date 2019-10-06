import React from "react";
import Add from "../../reusables/Add"
import {RandomModalStyles,RandomModalStylesCategories,ListStyles} from "./RandomModalStyles"

const RandomModal = ({
  open,
  handleChange,
  category,
  handleSubmit,
  modalHandler
}) => {

  const radioButtonsCategories = ["drama", "comedy", "action", "crime"];
  let radioButtons = radioButtonsCategories.map((cat, i) => {
    return (
      <ul key={i}>
        <input
          name={cat}
          type="radio"
          onChange={handleChange}
          value={cat}
          checked={category === cat}
        />
        <label htmlFor={cat}>{cat[0].toUpperCase() + cat.slice(1)}</label>
      </ul>
    );
  });
  return (
    <RandomModalStyles open={open}>
      <h3>Movie Roullete</h3>
      <RandomModalStylesCategories>
        <p>Select genre:</p>
        <form onSubmit={handleSubmit}>
          <ListStyles>
          {radioButtons}
          </ListStyles>
          <Add width="90%" color="black" type="submit" disabled={!category}>
            Roll
          </Add>
        </form>
      </RandomModalStylesCategories>
    </RandomModalStyles>
  );
};

export default RandomModal;
