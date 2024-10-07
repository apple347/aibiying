import { useEffect, useState } from "react";
import {throttle} from 'underscore';

export default function useScrollPostion(){
    const [scrollX,setScrollX]=useState(0);
    const [scrollY,setScrollY]=useState(0);

    useEffect(()=>{
        //进行节流操作
        const handleScroll=throttle(function() {
            setScrollX(window.scrollX);
            setScrollY(window.scrollY);
        },200)
        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])
    return {scrollX,scrollY};
}