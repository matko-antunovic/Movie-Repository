import styled from "styled-components/macro";
import {red} from "../reusables/Variables"

export const ButtonStyles=styled.button`
    background-color: ${props=> props.color ? props.color : red } ;
    outline: none;
    cursor: pointer;
    padding: 1rem;
    border: none;
    color: white;
    font-size: .9rem;
    font-weight: 600;
    text-transform:uppercase;
    margin:.5rem;
    width: ${props=> props.width ? props.width : "none"};
    border-radius:${props=> props.radius };
    :hover{
    filter: brightness(.9);
  }
`