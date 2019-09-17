import styled from "styled-components/macro"

export const NavigationContainer=styled.div`
  width: 100%;
  height: 50px;
  background: #353535;
  color: #fff;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  margin: 0;
  padding-top: 10px;

  
  @media (max-width: 500px) {
  display:none;
  }
`


export const NavigationContent=styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  p {
  font-family: 'Abel', sans-serif;
  font-size: 22px;
  float: left;
  color: #fff;
  padding-right: 10px;
  text-decoration: none;
  margin: 0;
}

@media (max-width: 600px) {
  padding:0;
  p {
  font-size:1.1rem;
  padding-right: 10px;
  padding-top:3px;
}
  }

`