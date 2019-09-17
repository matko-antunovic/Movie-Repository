import styled from "styled-components";

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
`

export const LoadMore=styled.button`
  padding: 1.5rem;
  margin-top: 3rem;
  background-color: rgba(243, 46, 46, 0.8);
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  outline:none;
  :hover{
  opacity: .8;
}

`