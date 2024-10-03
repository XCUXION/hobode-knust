import Link from "@/components/link/link"
import Text from "@/styles/components/text"
import theme from "@/styles/theme"
import { useParams } from "next/navigation"

const Crumbs = () => {
    const pathname = useParams()
    const {hostelName} = pathname

    return (
        <div className="flex gap-2 items-center mt-[-3px]">
            <Link href={'/'}>
                <Text className="hover:!text-[royalblue]">
                    Home 
                </Text>
            </Link>
            <Text>{'>'}</Text>
            <Link href={'/'}>
                <Text className="hover:!text-[royalblue]">
                    Booking
                </Text>
            </Link>
            <Text>{'>'}</Text>
            <Link href={'#'}>
                <Text
                    textColor={theme.colors.main.primary}
                >
                    {hostelName}
                </Text>
            </Link>
        </div>
    )
}
export default Crumbs