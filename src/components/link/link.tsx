import { ReactNode } from "react"
import NextLink from "next/link"

const Link = ({
    children,
    href
} : {
    children : ReactNode
    href : string
}) => {
    return (
        <NextLink 
            href={href}
            className="hover:underline hover:text-[royalblue] duration-200"
        >
            {children}
        </NextLink>
    )
}
export default Link