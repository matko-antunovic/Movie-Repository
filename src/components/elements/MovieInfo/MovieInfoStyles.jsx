import styled from "styled-components/macro";
import {IMAGE_BASE_URL, BACKDROP_SIZE} from "../../../config"

export const MovieInfoStyles=styled.div`
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  height: 600px;
  padding: 40px 20px;
  box-sizing: border-box;
  background: ${props=> props.bck ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.bck})` : "#000" }

 
`

export const MovieAlert=styled.div`
  position:absolute;
  top:0;
  left:10rem;
  padding:5rem;
  background-color:yellowgreen;
  
`

export const MovieInfoTitle=styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
     font-size:1rem;
   }

  @media (max-width: 1250px) {
   h1{
     font-size:1rem;
   }
  }
`
export const MovieInfoContent=styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: rgb(0, 0, 0, 0.7);
  position: relative;

  @media (max-width: 850px) {
    display:flex;
  }

`

export const MovieInfoThumb=styled.div`
  width: 350px;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0px;
  cursor: none;
  background-color:red;

  @media (max-width: 850px) {
    width:auto;
  }
`

export const MovieInfoText=styled.div`
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
  font-family: 'Abel', sans-serif;
  font-size:3rem;
  margin: 0;
  width: 70%;
}

h3 {
  font-size: 1rem;
  line-height: 0;
  margin-top: 1.8rem;
  margin-bottom: 1rem;
}
p {
  font-family: 'Abel', sans-serif;
  font-size: 18px;
  line-height: 26px;
}

  
@media (max-width: 1250px) {

  }

`

export const MovieInfoRating=styled.div`
  width: 250px;
  height: 20px;
  margin-top: 1.4rem;
  position: relative;

p{
    margin-top:.1rem;
    font-size:1.4rem;
}

  meter::-webkit-meter-bar {
  background: #FFF;
  width:200px;
  height:22px;
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
  `

export const MovieInfoScore=styled.p`
  position: absolute;
  margin: 0;
  right: 0px;
  top: -3px;`

export const MovieInfoDirector=styled.p`
  margin-top: .7rem;
  `
