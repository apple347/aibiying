

//通过检查对象是否有属性来判断对象是否为空。
export const isEmptyO=(obj)=>{
    return !!Object.keys(obj).length;
}