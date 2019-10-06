import styled from "styled-components/macro";
import {font} from "../../reusables/Variables"


export const HeroImageStyles = styled.div`
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0) 51%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    ${({ imageUrl }) => `url(${imageUrl})`}, #1c1c1c;
`;

export const HeroImageContent = styled.div`
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
`;

export const HeroImageText = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  background: rgba(0, 0, 0, 0);
  color: #fff;
  h1 {
   font-family: ${font};
    font-size: 48px;
    color: #fff;
  }
  p {
   font-family: ${font};
    font-size: 22px;
    line-height: 26px;
    color: #fff;
  }

  @media (max-width: 750px) {
    h1{
      font-size:2rem;
    }
    p{
      font-size:1rem;
    }
  }
`;
