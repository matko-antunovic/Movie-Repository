import styled from "styled-components"

export const FourColGridStyles=styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
  font-family: 'Abel', sans-serif;
  font-size:42px;
  color:#fff;
  margin: 1rem 0 4rem 0;
}
`


export const FourColGridContent=styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`

export const FourColGridElement=styled.div`
  background: #1c1c1c;
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  `

