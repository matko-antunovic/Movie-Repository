import styled from "styled-components"

export const FilterBarStyles=styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
max-width: 1280px;
width: 100%;
margin: 3rem 0;
`

export const FilterBarButtonStyles=styled.button`
    padding: 1rem;
    color: #fff;
    font-weight: 700;
    background-color: rgba(243, 46, 46, 0.8);
    border: none;
    margin:.3rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: .5rem;
    outline: none;

    :hover{
    filter: brightness(.8);
}
`