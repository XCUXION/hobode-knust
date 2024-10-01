import { ReactNode } from "react"

const Resize = ({
    children
} : {
    children? : ReactNode
}) => {
    return (
        <div className="w-full px-8 flex justify-center items-center">
          <div className="max-w-[1440px] w-full">
            {children}
          </div>
        </div>
    )
}
export default Resize