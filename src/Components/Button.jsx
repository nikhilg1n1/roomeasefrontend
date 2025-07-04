import React from 'react'
import {Link} from 'react-router-dom'

// Add `to` as a prop
const Button = ({
                    text,
                    rounded,
                    icon,
                    backGroundColor,
                    textColor,
                    textSize,
                    fullWidth,
                    btnHeigth,
                    border,
                    btnWidth,
                    borderColor,
                    to
                }) => {
    const classes = `cursor-pointer flex gap-2 font-secondary font-medium items-center text-xl py-3 pl-[24px] pr-[18px] justify-center hover:bg-blue-800 
    ${backGroundColor} 
    ${rounded || "rounded-full"}    
    ${textColor}
    ${borderColor}
    ${textSize || "text-xl"}
    ${btnHeigth}  
    ${border}
    ${btnWidth}
    ${fullWidth ? 'w-full' : ''}`

    const content = (
        <>
            {text}
            {icon && <span>{icon}</span>}
        </>
    )

    // If `to` is present, wrap in Link
    if (to) {
        return (
            <Link to={to} className={classes}>
                {content}
            </Link>
        );
    }
    return <button className={classes}>{content}</button>
};

export default Button
