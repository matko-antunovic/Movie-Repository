import styled from "styled-components/macro";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import {font} from "../../reusables/Variables"

export const MovieInfoStyles = styled.div`
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  height: 610px;
  padding: 40px 20px;
  box-sizing: border-box;
  @media (max-width: 1250px) {

    button {
      font-size: 0.75rem;
      padding: 0.5rem;
      margin:.5rem 0;
    }
  }

  @media (max-width: 500px) {
    display:flex;
    flex-direction:column;
    
  }

  @media (max-width: 330px) {
    height:120vh;
  }

  background: ${props =>
    props.bck ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.bck})` : "#000"};
`;

export const MovieAlert = styled.div`
  position: absolute;
  top: 0;
  left: 10rem;
  padding: 5rem;
  background-color: yellowgreen;
`;

export const MovieInfoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 width:100%;
  @media (max-width: 1250px) {
    button {
      font-size: 0.75rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 850px) {
    button {
      font-size: 0.65rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items:flex-start;

    h1{
      font-size:.2rem;
    }
  }
`;
export const MovieInfoContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: rgb(0, 0, 0, 0.7);
  position: relative;
`;

export const MovieInfoThumb = styled.div`
  width: 350px;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0px;
  cursor: none;
  @media (max-width: 1050px) {
    display: none;
  }
`;

export const MovieInfoText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  width: auto;
  padding: 2.5rem;
  color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  left: 360px;

  h1 {
    font-family: ${font};
    font-size: 3rem;
    margin: 0;
    width:70%;
  }

  h3 {
    font-size: 1rem;
    line-height: 0;
    margin-top: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    font-family: ${font};
    font-size: 18px;
    line-height: 26px;
  }

  @media (max-width: 1050px) {
    left: 0;
    padding: 1rem 1.5rem;

    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 650px) {
    p {
      font-size: 1rem;
      line-height: 20px;
    }
  }

  @media (max-width: 500px) {
    h1{
      width:100%;
      font-size:1.5rem;
    }
  }

 
`;

export const MovieInfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1250px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 650px) {
    h3 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items:flex-start;
  }
`;

export const MovieInfoRating = styled.div`
  width: 250px;
  height: 20px;
  margin-top: 1.4rem;
  position: relative;

  p {
    margin-top: 0.1rem;
    font-size: 1.4rem;
  }

  @media (max-width: 1250px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 650px) {
    display:flex;
    flex-direction:column;
  }

  meter::-webkit-meter-bar {
    background: #fff;
    width: 200px;
    height: 22px;
  }
  meter::-webkit-meter-optimum-value {
    background: linear-gradient(to bottom, #16d47b);
  }
  meter::-webkit-meter-suboptimum-value {
    background: linear-gradient(to bottom, #fbb450);
  }
  meter::-webkit-meter-even-less-good-value {
    background: linear-gradient(to bottom, #ee5f5b);
  }
`;

export const MovieInfoScore = styled.p`
  position: absolute;
  margin: 0;
  right: 0px;
  top: -3px;
`;

export const MovieInfoDirector = styled.p`
  margin-top: 0.7rem;
`;
