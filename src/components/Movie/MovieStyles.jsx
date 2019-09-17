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
`

export const MovieDetails=styled.div`
  display: flex;
  padding:3rem 0;
`

export const MovieTrailer=styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 60%;
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

export const MovieSimilar2=styled.div`
  width: 100%;
  height: 25rem;
  overflow: hidden;
  margin-top: 2rem;
  display: flex;
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
`

