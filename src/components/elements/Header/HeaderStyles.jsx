import styled from "styled-components/macro";
import {grey,font} from "../../reusables/Variables"

export const HeaderStyles=styled.div`
  width: 100%;
  height: auto;
  background: ${grey};
  padding: 0 20px;
  box-sizing: border-box;
`

export const HeaderContent=styled.div`
 max-width: 1280px;
  min-height: 120px;
  height: auto;
  padding: 20px 0px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Watchlist=styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: ${font};
  cursor: pointer;

  :hover{
  color: red;
}

@media (max-width: 400px) {
   font-size:1rem;
  }
`

export const Logo=styled.img`
  width: 200px;
  height: 25px;
  object-fit: contain;

  
@media (max-width: 400px) {
  width: 150px;
  }
`

  