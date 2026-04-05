export const tooggleValue=(value,list)=>{
    return list.includes(value) ?
    list.filter((v) => v  !==value):
    [...list,value]

}