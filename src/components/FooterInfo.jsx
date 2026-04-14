import React from 'react'


function  FooterInfo ({label,text1,text2,text3,text4,text5, text6, text7,text8}) {
    return (
        <div className={"w-[239px] h-[312px] flex flex-col gap-2"}>
            <h3 className={"font-primary text-base font-medium text-neutral-500 uppercase leading-none"}>{label}</h3>
            <h3 className={"\"w-[123px] h-[26px] text-neutral-800 text-xl font-normal font-primary hover:text-blue-600 cursor-pointer  leading-tight\""}>{text1}</h3>
            <h3 className={"\"w-[123px] h-[26px] text-neutral-800 text-xl font-normal font-primary  hover:text-blue-600 cursor-pointer  leading-tight\""}>{text2}</h3>
            <h3 className={"\"w-[123px] h-[26px] text-neutral-800 text-xl font-normal font-primary hover:text-blue-600 cursor-pointer  leading-tight\""}>{text3}</h3>
            <h3 className={"\"w-[123px] h-[26px] text-neutral-800 text-xl font-normal font-primary hover:text-blue-600  cursor-pointer leading-tight\""}>{text4}</h3>
            <h3 className={"\"w-[123px] h-[26px] text-neutral-800 text-xl font-normal font-primary hover:text-blue-600 cursor-pointer leading-tight\""}>{text5}</h3>
            <h3 className={"\"w-[123px] h-[26px] text-neutral-800 text-xl font-normal font-primary hover:text-blue-600 cursor-pointer leading-tight\""}>{text6}</h3>
            <h3 className={"\"w-[123px] h-[26px] text-neutral-800 text-xl font-normal font-primary hover:text-blue-600 cursor-pointer leading-tight\""}>{text7}</h3>
            <h3 className={"\"w-[123px] h-[26px] text-neutral-800 text-xl font-normal font-primary hover:text-blue-600 cursor-pointer leading-tight\""}>{text8}</h3>
        </div>
    )
}
export default FooterInfo
