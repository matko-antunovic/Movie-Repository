import styled from "styled-components/macro";

export const MovieContainer=styled.div`
  padding-bottom: 100px;
  background-color: #1c1c1c;
`

export const MovieGrid=styled.div`
  max-width: 1280px;
  margin: 3rem auto;
  padding: 0 20px;
  color: black;
  font-family: 'Abel', sans-serif;
  font-size:1.3rem;
  color:#fff;

  @media(max-width:1250px){
    margin:0 auto;
  }
`

export const MovieDetails=styled.div`
  display: flex;
  padding:3rem 0;
  height:auto;

  @media(max-width:1250px){
    flex-direction:column;
  }
`

export const MovieTrailer=styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 60%;
  order:-1;
`

export const MovieReview=styled.div`
  font-size: 1rem;
  color: #fff;
  padding-left:1rem;
  padding-top: .5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: black;
`

export const MovieReviewText=styled.div`
 font-style: italic;
 font-size: 1.19rem;
 font-family: 'Abel', sans-serif;
 margin-top: 2rem;
 margin-right: 1rem;
`

export const RateMovie=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:baseline;
padding:1rem;
font-size:1.8rem;

span{
  margin:0 1rem;
}
`

export const MovieSimilar2=styled.div`
  width: 100%;
  height: 25rem;
  overflow: hidden;
  margin-top: 2rem;
  display: flex;

  @media(max-width:1250px){
    height:auto;
    flex-direction:column;
   align-items:center;
   margin-bottom:3rem;
  }
`

export const MovieSimiliarLeftSide=styled.div`
  width: 30rem;
  margin-right: 2rem;
  max-width: 30rem;
  display: grid;
  grid-template-columns: repeat(3,minmax(110px, 1fr));
  min-width: 30rem;
  grid-template-rows: 1fr 1fr;
  grid-row-gap:.8rem;
  grid-column-gap: .5rem;
  justify-items: center;

  @media(max-width:1250px){
    display:flex;
    margin-right: 0;
    min-width:100%;
  }
  @media(max-width:800px){
    width:100%;
    display: grid;
    grid-template-columns: repeat(3,minmax(80px, 200px));
    grid-row-gap:1rem;
  grid-column-gap: 1rem;
  justify-content:center;
  }
`

