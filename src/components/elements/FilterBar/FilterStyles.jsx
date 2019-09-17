import styled from "styled-components/macro";

export const FilterBarStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  width: 100%;
  margin: 3rem 0;
  @media (max-width: 1250px) {
    margin: 1rem 0;
    padding: 1rem;
  }
`;

export const FilterBarButtonStyles = styled.button`
  padding: 1rem;
  color: #fff;
  font-weight: 700;
  background-color: rgba(243, 46, 46, 0.8);
  border: none;
  margin: 0.3rem;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0.5rem;
  outline: none;

  :hover {
    filter: brightness(0.8);
  }
  @media (max-width: 750px) {
    font-size:.7rem;
    padding:.7rem;
  }
`;
