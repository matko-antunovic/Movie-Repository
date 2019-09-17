import styled from "styled-components/macro"

export const ActorStyles=styled.div`
 box-sizing: border-box;

 img {
  width: 40%;
  height: auto;
  float: left;
  box-sizing: border-box;
}

@media (max-width: 1250px) {
  display:flex;
  flex-direction:column;
  align-items:center;

  }
`
export const ActorName=styled.div`
  font-family: 'Abel', sans-serif;
  font-size: 22px;
  color:#fff;
  float: left;
  margin: 10px 20px;
  width: 40%;
  box-sizing: border-box;
`
export const ActorCharacter=styled.div`
  font-family: 'Abel', sans-serif;
  font-size: 18px;
  color:#fff;
  float: left;
  margin: 0 20px 10px 20px;
  width: 40%;
  box-sizing: border-box;
  max-height:5rem;
  overflow:hidden;
`