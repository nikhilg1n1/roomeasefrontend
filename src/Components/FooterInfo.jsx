import React from 'react'


function  FooterInfo ({label,text1,text2,text3,text4,text5, text6, text7,text8}) {
    return (
        <div className={"w-[239px] h-[312px] flex flex-col gap-2"}>
            <h1 className={"font-primary text-base font-medium text-neutral-500 uppercase leading-none"}>{label}</h1>
            <h1 className={"\"w-[123px] h-[26px] text-[#ebebeb] text-xl font-normal font-primary hover:text-[#7dfb5d] cursor-pointer  leading-tight\""}>{text1}</h1>
            <h1 className={"\"w-[123px] h-[26px] text-[#ebebeb] text-xl font-normal font-primary  hover:text-[#7dfb5d] cursor-pointer  leading-tight\""}>{text2}</h1>
            <h1 className={"\"w-[123px] h-[26px] text-[#ebebeb] text-xl font-normal font-primary hover:text-[#7dfb5d] cursor-pointer  leading-tight\""}>{text3}</h1>
            <h1 className={"\"w-[123px] h-[26px] text-[#ebebeb] text-xl font-normal font-primary hover:text-[#7dfb5d]  cursor-pointer leading-tight\""}>{text4}</h1>
            <h1 className={"\"w-[123px] h-[26px] text-[#ebebeb] text-xl font-normal font-primary hover:text-[#7dfb5d] cursor-pointer leading-tight\""}>{text5}</h1>
            <h1 className={"\"w-[123px] h-[26px] text-[#ebebeb] text-xl font-normal font-primary hover:text-[#7dfb5d] cursor-pointer leading-tight\""}>{text6}</h1>
            <h1 className={"\"w-[123px] h-[26px] text-[#ebebeb] text-xl font-normal font-primary hover:text-[#7dfb5d] cursor-pointer leading-tight\""}>{text7}</h1>
            <h1 className={"\"w-[123px] h-[26px] text-[#ebebeb] text-xl font-normal font-primary hover:text-[#7dfb5d] cursor-pointer leading-tight\""}>{text8}</h1>
        </div>
    )
}
export default FooterInfo
