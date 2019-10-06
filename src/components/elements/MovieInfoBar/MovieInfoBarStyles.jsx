import styled from "styled-components/macro";
import {grey2,font} from "../../reusables/Variables"

export const MovieInfoBarStyles=styled.div`
  width: 100%;
  height: 105px;
  background: ${grey2};
  position: relative;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  font-family: ${font};
  font-size: 22px;
  @media (max-width: 875px) {
   height:auto;
   padding-top:0;
}
`

export const MovieInfoBarContent=styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  display:flex;
  justify-content:space-between;
  @media (max-width: 875px) {
    display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
}
  `

export const MovieInfoBarContentColumn=styled.div`
  width: auto;
  box-sizing: border-box;
  padding: 10px 20px 10px 0;
  display:flex;
  align-items:center;
  `


export const MovieInfoBarInfo=styled.div`
  padding: 5px 0 0 10px;

  `
