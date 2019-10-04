import styled from "styled-components/macro";

export const HomeStyles=styled.div`
  width: 100%;

`
export const HomeGrid=styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`
export const HomeComponent=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HomeContainerStyles=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeCategorySelect=styled.span`
color: white;
  font-size: 1.5rem;
  min-width: 15rem;
  font-family: 'Abel', sans-serif;
`

export const HomeFilter=styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;

  @media (max-width: 1250px) {
   flex-direction:column;
  }
`

export const LoadMore=styled.button`
justify-self:end;
  background-color: rgba(243, 46, 46, 0.8);
  border: none;
  border-radius: 50%;
  width:5rem;
  height:5rem;
  font-weight:800;
  transform:translate(50%,0);
  border:3px dotted #d2b6b6;
  color: #fff;
  cursor: pointer;
  outline:none;
  :hover{
  opacity: .8;
}

`

export const RandomButton=styled.button`
justify-self:end;
margin-right:20%;
width:5rem;
height:5rem;
background-color:rgba(243,46,46,0.8);
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
border:none;
color: #fff;
  cursor: pointer;
  outline:none;
  :hover{
  opacity: .8;
}
span{
  transform:translate(5%,5%);
}
`

export const ButtonsContainer=styled.div`
margin-top:5rem;
width:100%;
display:grid;
grid-template-columns:repeat(2,1fr);

`