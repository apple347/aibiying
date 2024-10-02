import hyrequest from "../request";

export function getEntireRoomList(offset=0,size=20){
    return hyrequest.get({
        url:'/entire/list',
        params:{
            offset,
            size
        }
    })
}