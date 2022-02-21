import styled from "styled-components"

export const Container = styled.div`
    background-color: ${props => props.theme.keypadbg};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 3rem;
    width: 5.1rem;
    height: 2.2rem;
`;

export const Input = styled.input`
    display: none;
`;

export const Label = styled.label`
    cursor:pointer;
    position:relative;
    font-size:1rem;
    &::after{
        position:absolute;
        content:"";
        top:-8px;
        left:-8px;
        width:16px;
        height:16px;
        border-radius: 50%;
        background-color:${props => props.value === props.theme.name ? props.theme.keytwo : props.theme.mainbg};
    }
    &:hover::after{
        background-color:${props => props.theme.keytwohover};
    }
`;

export const Number = styled.p`
  color:${props => props.theme.texttitle};
  position:absolute;
  top:-60px;
  left:-5px;
`;