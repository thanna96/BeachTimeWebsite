import styled from "styled-components";


export const ButtonContainer = styled.button`
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
  font-size: 16px;
  background-color: black;
  color: white;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  width: 100%;
  &:hover {
    background: #414141;
  }

  &:focus {
    outline: none;
  }
`;