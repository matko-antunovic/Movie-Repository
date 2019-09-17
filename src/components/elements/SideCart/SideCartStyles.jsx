import styled, { css } from "styled-components";

const showStyle = css`
  position: fixed;
  top: 0;
  right: 0rem;
`;

export const SideCartContainer = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  right: -300px;
  z-index: 111;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  transition: all 1s cubic-bezier(0.35, 0.82, 0.35, 1);
  overflow-y: scroll;
  ${props => (props.show ? showStyle : null)}

  ::-webkit-scrollbar-track {
    border: 3px solid #000;
    padding: 2px 0;
    background-color: #404040;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #737272;
    border: 1px solid #000;
  }
`;
export const SideCartClose = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 1.6rem;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  color: rgba(243, 46, 46, 0.8);
  font-weight: 900;
`;

export const SideCartElements = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SideCartElement = styled.div`
  margin: 0;
  padding: 0;
  width: 90%;
  height: auto;
`;
