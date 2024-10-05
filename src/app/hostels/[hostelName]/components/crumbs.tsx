import Chip from "@/components/chip/chip"
import Link from "@/components/link/link"
import Text from "@/styles/components/text"
import theme from "@/styles/theme"
import { useParams, useRouter } from "next/navigation"
import { FaCaretLeft } from "react-icons/fa"

const Crumbs = () => {
    const pathname = useParams()
    const {hostelName} = pathname
    const router = useRouter()

    return (
        <div className="flex gap-2 items-center mt-[-3px]">
            <Chip
                className="!rounded-md !h-[30px] !w-[30px] !p-0 mt-[3px]"
                onClick={()=>router.back()}
            >
                <FaCaretLeft 
                    color={theme.colors.text.primary}
                />
            </Chip>
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