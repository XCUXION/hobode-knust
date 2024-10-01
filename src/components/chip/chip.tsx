import { baseProps } from "@/utils/types/@types"

const Chip = ({
    children,
    className,
    onClick
} : baseProps) => {
    return (
        <div 
            className={`Chip w-fit flex px-[12px] h-fit py-[5px] rounded-full justify-center items-center duration-200 bg-bg-transparent-primary cursor-pointer hover:bg-[#46444118] border-solid border-[1px] border-border-primary ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
export default Chip