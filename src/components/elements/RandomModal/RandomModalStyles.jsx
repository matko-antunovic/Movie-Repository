import styled, { css } from "styled-components/macro";
import { font } from "../../reusables/Variables";
const displayOpen = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const displayClosed = css`
  display: none;
`;

export const RandomModalStyles = styled.div`
  ${props => (props.open ? displayOpen : displayClosed)};
  z-index: 922;
  height: 35rem;
  width: 30rem;
  background-color: #fff;
  font-size: 2rem;
  font-family: ${font};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    margin-bottom: 1rem;
  }

  h3 {
    width: 100%;
    padding: 3rem;
    background-color: black;
    border-bottom: 2px solid black;
  }

  @media (max-width: 750px) {
    font-size: 1.5rem;
    width: 20rem;
    height: 30rem;

    h3 {
    padding: 2rem;
  }
  }
`;

export const ListStyles = styled.li`
  list-style: none;
  margin-bottom: 1rem;

  input[type="radio"] {
    margin: 1rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
`;

export const RandomModalStylesCategories = styled.div`
  margin-top: 2rem;
  width: 100%;
  color: black;
  padding-left: 3rem;

  @media (max-width: 750px) {
    padding: 1.5rem;
    margin-top:0;
  }
`;
