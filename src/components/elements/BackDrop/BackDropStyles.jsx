import styled from "styled-components/macro";


export const BackDropStyles=styled.div`
    z-index: 555;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    min-height: 100%;
    display:${props=>props.bck ? props.bck : "none"}
`