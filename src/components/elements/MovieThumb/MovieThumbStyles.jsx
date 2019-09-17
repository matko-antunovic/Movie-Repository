import styled from "styled-components/macro"

export const MovieThumbStyles=styled.div`
img {
  width: 500px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s;
  box-sizing: border-box;
  :hover{
  filter: brightness(.4);
  cursor: pointer;
}

@media (max-width: 850px) {
    height: 100%;
     width: 15rem;
     padding:1rem;
  }
}

`

export const MovieThumbContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c1c1c;
  cursor: pointer;

  :hover {
  opacity: 0.8;
}
  `

export const MovieThumbName=styled.p`
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  font-family:  'Abel', sans-serif;
  width: 100%;
  text-align: center;
  margin-top: .5rem;
`