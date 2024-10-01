import styled from "styled-components";


export const FooterWrapper=styled.div`

margin-top: 10px;
display: flex;
.info{
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    color: ${props=>{return props.name?'#00848a':'#000'}};

    &:hover{
        text-decoration: underline;
    }

    .text{
        margin-right: 6px;
    }
}
`