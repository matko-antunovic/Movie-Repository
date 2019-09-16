import styled from "styled-components";

export const SmallInfo=styled.div`
     display: flex;
    height: 100%;
    width: 100%;
    background-color: black;
`

export const SmallInfoDetails=styled.div`
     margin:0 1rem;
   h2{
    cursor: pointer;
    margin:1.5rem 0;
   }
`

export const SmallInfoDetailsText=styled.p`
    font-size: 1rem;
`

export const SmallInfoImage=styled.div`
 height: 100%;

 img{
    margin:.5rem;
    height:80%;
    width: 200px;
    object-fit: inherit;
    cursor: pointer;
 }
`
