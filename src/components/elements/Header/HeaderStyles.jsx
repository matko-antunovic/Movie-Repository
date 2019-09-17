import styled from "styled-components";

export const HeaderStyles=styled.div`
  width: 100%;
  height: auto;
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;
`

export const HeaderContent=styled.div`
 max-width: 1280px;
  min-height: 120px;
  height: auto;
  padding: 20px 0px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Watchlist=styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Abel', sans-serif;
  cursor: pointer;

  :hover{
  color: red;
}
`

export const Logo=styled.img`
  width: 200px;
  height: 25px;
  object-fit: contain;
`


// @media screen and (max-width: 500px) {
//     .rmdb-header-content {
//       max-width: 1280px;
//       min-height: 0px;
//     }
  
//     .rmdb-tmdb-logo {
//       display: inline-block;
//       width:80px;
//       margin-top: 0px;
//     }
  
//     .rmdb-logo {
//       width: 150px;
//       margin-top: 5px;
//     }
//   }
  