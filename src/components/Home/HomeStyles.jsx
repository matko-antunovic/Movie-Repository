import styled, { css } from "styled-components/macro";
import { red, font } from "../reusables/Variables";

const sharedButtonStyle = css`
  width: 5rem;
  height: 5rem;
  background-color: ${red};
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 0.8;
  }
`;

export const HomeStyles = styled.div`
  width: 100%;
`;
export const HomeGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const HomeComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HomeContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeCategorySelect = styled.span`
  color: white;
  font-size: 1.5rem;
  min-width: 15rem;
  font-family: ${font};
`;

export const HomeFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

export const LoadMore = styled.button`
 ${sharedButtonStyle}
  justify-self: end;
  font-weight:800;
  transform: translate(50%, 0);
  border: 3px dotted #d2b6b6;

  @media (max-width: 850px) {
    transform:none;
  }
`;

export const RandomButton = styled.button`
  justify-self: end;
  ${sharedButtonStyle}
  margin-right:20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  span {
    transform: translate(5%, 5%);
  }

  @media (max-width: 850px) {
    margin:0;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 850px) {
    display:flex;
    justify-content:space-around;
  }
`;
