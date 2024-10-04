import styled from "styled-components";


export const PaginationWrapper=styled.div`

display: flex;
justify-content: center;
margin-top: 20px;

.info{
    display: flex;
    flex-direction: column;
    align-items: center;

    .ant-pagination-item{
        border:1px solid #00848a;
        border-radius: 20px;
        margin-right: 15px;
    }

    .ant-pagination-item-active{
        background-color: #000;
       a{
        color: #fff;
       }
    }
    .desc{
        margin-top: 16px;
        color: #222;
    }
}
`