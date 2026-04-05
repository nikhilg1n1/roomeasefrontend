import React from 'react'

function NumberComponent ({headerText,bodyText}) {
    return (
        <div className={"w-[148px] h-[120px] flex flex-col items-center justify-center"}>
            <h1 className={"font-sans font-semibold text-4xl text-white"}>{headerText}</h1>
            <h1 className={"font-sans font-normal text-[16px] pt-2  text-center text-white"}>{bodyText}</h1>
        </div>
    )
}
export default NumberComponent
