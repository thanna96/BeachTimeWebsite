import styled from "styled-components";


export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem transparent;
    color: var(--mainBlack);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0.5rem;
    transition:all 0.25s ease-in-out;
    &:hover{
        background:#D3D3D3;
    }
    &:focus{
        outline: none;
    }
`;