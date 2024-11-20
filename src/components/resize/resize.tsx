import { ReactNode } from "react"

const Resize = ({
    children,
    className
} : {
    children? : ReactNode
    className? : string
}) => {
    return (
        <div className={`w-full px-4 md:px-8 flex justify-center items-center ${className}`}>
          <div className="md:max-w-[1440px] w-full">
            {children}
          </div>
        </div>
    )
}
export default Resize