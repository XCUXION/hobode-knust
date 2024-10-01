'use client'

import { Dispatch, ReactNode, SetStateAction, useState } from "react"

const Input = ({
    className,
    placeholder,
    type,
    content,
    setContent,
    PreIcon,
    PostIcon,
    onClick
} : {
    className? : string,
    onClick? : ()=>void,
    placeholder? : string,
    type? : string,
    content : string,
    PreIcon? : ReactNode,
    PostIcon? : ReactNode,
    setContent : Dispatch<SetStateAction<string>>
}) => {
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);

    const borderClass = (inputFocus || hover) ? 'border-main-primary' : 'border-border-primary';

    return (
        <div 
            className={`flex w-full flex-1 gap-2 px-[15px] py-[10px] items-center rounded-full bg-bg-transparent-primary border-[1px] border-solid ${borderClass} duration-200 ${className}`}
            onClick={onClick}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {PreIcon && PreIcon}
            <input 
                placeholder={placeholder ?? 'Input text'}
                type={type ?? 'text'}
                className="flex w-full flex-1 bg-transparent outline-none placeholder:text-[11px] placeholder:text-text-tetiary text-text-primary md:text-[11px] text-[16px]"
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            {PostIcon && PostIcon}
        </div>
    )
}

export default Input;
