import styled from "styled-components/macro"

export const MovieSimilarStyles=styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;

    :hover{
   cursor: pointer;
   filter: brightness(.6);
}

img{
    width: 100%;
    height: 100%;

}
@media(max-width:1250px){
    margin:0 .2rem;

  }
 
`
