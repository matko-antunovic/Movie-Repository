import styled from "styled-components";
import {font} from "../reusables/Variables"

export const FooterContainer=styled.div`
   font-size: 1rem;
  margin-top: 5rem;
  width: 100%;
  font-family: ${font};
  background-color: black;
  display: flex;
  justify-content: center;
  padding:2rem 0;

  @media (max-width: 800px) {
  display:flex;
  flex-direction:column;
  }
`
export const Divs=styled.div`
 display: flex;
  flex-direction: column;
  padding:0 5rem;
  line-height: 2;
  text-decoration: underline;

  span{
    margin:0 5px;
  }

  @media (max-width: 800px) {
  padding:0;
  align-items:center;
  line-height:1.35;
  }

  a{
    text-decoration: none;
    color:rgba(243, 46, 46, 0.8);
    margin-left: 20px;
    color:red;
    @media (max-width: 800px){
    margin-left:0;
    color:red;
  }
} 
`
 

