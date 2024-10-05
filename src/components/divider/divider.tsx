import { ReactNode } from "react"

const Divider = ({
    className
} : {
    className? : ReactNode
}) => {
    return (
        <div className={`w-full h-[1px] bg-bg-secondary rounded-full ${className}`}></div>
    )
}
export default Divider