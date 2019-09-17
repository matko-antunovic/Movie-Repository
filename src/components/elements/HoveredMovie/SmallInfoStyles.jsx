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

   h4{
     margin-bottom:1rem;
   }
`

export const SmallInfoDetailsText=styled.p`
    font-size: 1rem;
    margin-bottom:1rem;
`

export const SmallInfoImage=styled.div`
  height:100%;

 img{
    margin:0 .45rem;
    padding-top:1.5rem;
    height:95%;
    width: 200px;
    cursor: pointer;
 }
`

export const SmallInfoRating=styled.div`
  display:flex;
  font-size:1.5rem;
  align-items:center;
 meter{
  width:200px;

  margin-right:.65rem;
 }

 meter::-webkit-meter-bar {
  background: #fff;
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

