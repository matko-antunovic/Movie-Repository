import styled from "styled-components"

export const SearchBarContainer=styled.div`
 width: 100%;
  height: 105px;
  background: rgba(0, 0, 0, 0.11);
  position: relative;
  padding: 35px 20px 0px 30px;
  box-sizing: border-box;
  color: #fff;
`

export const SearchBarContent=styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background:#353535;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: #fff;
`

export const FaSearch=styled.div`
  position: absolute;
  left: 20px;
  top: 12px;
  color: #fff;
`

export const SearchBarInput=styled.input`
 font-family: 'Abel', sans-serif;
  font-size:2rem;
  width: 100%;
  position: absolute;
  left: 70px;
  top: 7px;
  border: 0;
  background: transparent;
  height: 40px;
  color: #fff;
  :focus {
  outline: none;
}

`


// @media screen and (max-width: 720px) {
//     .rmdb-searchbar-input {
//       font-size: 28px;
//       color: #fff;
//     }
//   }