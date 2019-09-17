import styled,{css} from "styled-components/macro"

const elementStyle = css`
    height: 4.5rem;
    width: 4.5rem;
    object-fit: unset;
`;

export const WatchListElement=styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    background-color:rgba(100,100,100,.35);
    :hover{
    filter: brightness(.85);
    background-color: rgba(243, 46, 46, 0.8);
  
}

`

export const WatchListImage=styled.img`
${elementStyle}
:hover{
    cursor: pointer;
}
`

export const WatchListTitle=styled.div`
font-family: 'Abel', sans-serif;
    font-size: 1rem;
    text-transform: capitalize;
    margin-left: .35rem;

    :hover{
    cursor: pointer;
}
`

export const WatchListClose=styled.span`
margin:0 .65rem;
    color:white
    :hover{ cursor: pointer; color:black}
`