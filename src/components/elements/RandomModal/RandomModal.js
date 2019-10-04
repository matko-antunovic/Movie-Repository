import React from "react";
import "./RandomModal.scss";

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
    <div className={`RandomModal ${open ? "show" : null}`}>
      <h3>Movie Roullete</h3>
      <div className="RandomModal-categories">
        <p>Select genre:</p>
        <form onSubmit={handleSubmit}>
          {radioButtons}
          <button className="roll" type="submit" disabled={!category}>
            ROLL
          </button>
        </form>
      </div>
    </div>
  );
};

export default RandomModal;
