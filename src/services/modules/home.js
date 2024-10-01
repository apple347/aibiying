import hyrequest from "../request";

export function getHomeGoodPriceData(){
    return hyrequest.get({
        url:'/home/goodprice'
    })
}


export function getHomeHighScoreData(){
    return hyrequest.get({
        url:'/home/highscore'
    })
}

export function getHomeDiscountData(){
    return hyrequest.get({
        url:'/home/discount'
    })
}

export function getHomeHotRecmmendData(){
    return hyrequest.get({
        url:'/home/hotrecommenddest'
    })
}