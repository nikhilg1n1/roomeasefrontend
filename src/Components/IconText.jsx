import React from 'react'

function IconText ({icon,headerText,bodyText}){
    return (
        <div className={"w-[260px] h-[178px] flex flex-col items-center justify-center"}>
            <img src={icon} alt={"icons"} height={100} width={100}/>
            <h1 className={"text-2xl font-semibold pt-4 text-[#212121]"}>{headerText}</h1>
            <h1 className={"text-[18px] pt-1 font-normal text-center  text-[#212121]"}>{bodyText}</h1>
        </div>
    )
}
export default IconText
