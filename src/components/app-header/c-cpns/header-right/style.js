import styled from "styled-components";

export const RightWrapper=styled.div`

flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
font-weight: 600;


.btns{
    display: flex;
    align-items: center;




    
    .btn{
        height: 18px;
        line-height: 18px;
        padding: 12px 15px;
        cursor: pointer;
        border-radius: 22px;

        &:hover{
            background-color: #f5f5f5;
        }
    }


}

.profile{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;

    .panel{
        position: absolute;
        right: 0;
        top: 60px;
        width: 240px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 6px rgba(0,0,0,.18);

        .top,.bottom{
            padding: 10px 0;


            .item{
                padding: 0 16px;
                height: 40px;
                line-height: 40px;

                &:hover{
                    background-color: #f5f5f5;
                }
            }
        }
        
        .top{
            border-bottom: 1px solid #ddd;
        }
    }

    ${props=>props.theme.mixin.boxShadow}
}
`