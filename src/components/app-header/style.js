import styled from "styled-components";

export const HeaderWrapper = styled.div`

border-bottom: 1px solid #eee;

&.fixed{
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
}

.content{
position: relative;
z-index: 19;
background-color: #fff;
.top{
display: flex;
align-items: center;
height: 80px;
}

.search-area{
    height: ${props=>((props.issearch)?'100px':'0')};
    transition: height 250ms ease;
}
}
.cover{
    position: fixed;
    z-index: 9;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
}


`