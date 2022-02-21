import styled from "styled-components";

export const Display = styled.div`
    
    text-align:right;
    background-color: ${props => props.theme.screenbg};
    color: ${props => props.theme.texttitle};
    padding:30px;
    border-radius:1rem;
    font-size:32px;
    margin-top:25px;
    margin-bottom:25px;
    height:30px;
    @media screen and (min-width: 0px) and (max-width: 480px){
        width: 275px;
    }
`;

export const Botones = styled.div`
    button {
        background-color:${props => props.theme.keythree};
        color:${props => props.theme.textone};
        font-size:32px;
        font-weight: bold;
        cursor:pointer;
        border-radius:1rem;
        border:transparent;
        box-shadow: 1px 3px 0px ${props=> props.theme.keythreeshadow};
        &:hover{
            background-color:${props => props.theme.keyonehover};
        }  
    }
    
`;

export const Signos = styled.button`
    background-color:${props => props.theme.keythree};
    color:${props => props.theme.textone};
    font-size: 32px;
    font-weight: bold;
    cursor:pointer;
    border-radius:1rem;
    border:transparent;
    box-shadow: 1px 3px 0px ${props=> props.theme.keythreeshadow};
    &:hover{
        background-color:${props => props.theme.keyonehover};
    }
`;

export const Clear = styled.button`
    background-color:${props => props.theme.keyone};
    color:white;
    font-size:20px;
    font-weight: bold;
    cursor:pointer;
    border-radius:1rem;
    border:transparent;
    box-shadow: 1px 3px 0px ${props=> props.theme.keyoneshadow};
    &:hover{
        background-color:${props => props.theme.keythreehover};
    }
`;

export const Igual = styled.button`
    background-color:${props => props.theme.keytwo};
    color:${props => props.theme.texttwo};
    font-size:32px;
    font-weight: bold;
    cursor:pointer;
    border-radius:1rem;
    border:transparent;
    box-shadow: 1px 3px 0px ${props=> props.theme.keytwoshadow};
    &:hover{
        background-color:${props => props.theme.keytwohover};
    }
`;

export const Title = styled.h1`
  font-size:2.7rem;
  color:${props => props.theme.texttitle};
`;

export const ThemeTitle = styled.p`
  font-size:0.9rem;
  color:${props => props.theme.texttitle};
  font-weight:bold;
`;