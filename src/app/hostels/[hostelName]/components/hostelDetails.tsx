import UserProfile from "@/app/components/topbar/components/userProfile"
import Chip from "@/components/chip/chip"
import Divider from "@/components/divider/divider"
import Ratings from "@/components/ratings/ratings"
import Text from "@/styles/components/text"
import { TypographyBold, TypographySize } from "@/styles/style.types"
import theme from "@/styles/theme"
import { IoIosBed } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"

const HostelDetails = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-[600px]">
            <div className="flex flex-col gap-2 ml-1">
                <Text
                    textColor={theme.colors.text.primary}
                    size={TypographySize.HL2}
                    bold={TypographyBold.sm2}
                >
                    Franko hostel
                </Text>
                <div className="mt-[-4px]">
                    <Ratings rating={3.5}/>
                </div>
                <div className="flex items-center gap-[1px] ml-[-3px] mt-[-4px]">
                    <IoLocationSharp
                        color={theme.colors.text.secondary}
                        size={13}
                    />
                    <Text>
                        Kotei, Kumasi
                    </Text>
                </div>
            </div>
            <Divider />
            <div className="flex flex-col gap-1 ml-1">
                <Text
                    textColor={theme.colors.text.primary}
                    bold={TypographyBold.sm2}
                >
                    Armenities
                </Text>
                <div className="flex gap-3 ml-[-2px] flex-wrap">
                    {
                        [1,2,3,4,5,6,7].map((item, index) => (
                            <Chip
                                key={index}
                                className="!bg-[#00000010] !px-3 !py-1"
                            >
                                <div className="flex items-center gap-1">
                                    <IoIosBed
                                        color={theme.colors.text.secondary}
                                        size={13}
                                    />
                                    <Text>
                                        3 in a room
                                    </Text>
                                </div>
                            </Chip>
                        ))
                    }
                </div>
            </div>
            <Divider />
            <div className="flex flex-col gap-1 ml-1">
                <Text
                    textColor={theme.colors.text.primary}
                    bold={TypographyBold.sm2}
                >
                    Description
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesent
                </Text>
            </div>
            <Divider />
            <div className="flex flex-col gap-1 ml-1">
                <Text
                    textColor={theme.colors.text.primary}
                    bold={TypographyBold.sm2}
                >
                    Rented by
                </Text>
                <UserProfile />
            </div>
        </div>
    )
}
export default HostelDetails