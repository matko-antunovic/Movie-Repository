import styled from "styled-components/macro"
import {grey,font} from "../../reusables/Variables"

export const FourColGridStyles=styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    font-family: ${font};
  font-size:42px;
  color:#fff;
  margin: 1rem 0 4rem 0;
}
@media (max-width: 850px) {
  h1{ margin:.5rem 0 2rem 0;}
  }
`


export const FourColGridContent=styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
    grid-column-gap: 0px;
  grid-row-gap: 1rem;

  }
`

export const FourColGridElement=styled.div`
  background: ${grey};
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;

  `

