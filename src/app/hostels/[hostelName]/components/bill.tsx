import Text from "@/styles/components/text"
import Chip from "@/components/chip/chip"
import { TypographyBold, TypographySize } from "@/styles/style.types"
import theme from "@/styles/theme"
import { IoIosBed } from "react-icons/io"
import { IoReceipt } from "react-icons/io5"
import Button from "@/components/button/button"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
import { useRouter } from "next/navigation"

const Bill = () => {
    const router = useRouter()

    const hanldeSubmit = async () => {
        router.push('/checkout')
    }
    return (
        <div className="flex flex-col gap-2 p-6 rounded-xl border-[1px] border-solid border-border-primary flex-1">
            <div className="flex gap-1 items-center">
                <Text
                    textColor={theme.colors.text.primary}
                    size={TypographySize.HL2}
                    bold={TypographyBold.sm2}
                >
                    $4,800
                </Text>
                <Text>
                    /year
                </Text>
            </div>
            <div className="flex gap-3 ml-[-2px] flex-wrap w-full">
                {
                    [1,2,3,4,5,6,7].map((item, index) => (
                        <Chip
                            key={index}
                            className="!px-3 !py-1"
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
            <div className="flex flex-col gap-1 mt-2">
                <div className="flex items-center gap-1 ml-2">
                    <IoReceipt
                        color={theme.colors.text.secondary}
                        size={13}
                    />
                    <Text
                        textColor={theme.colors.text.primary}
                        bold={TypographyBold.sm2}
                        size={TypographySize.HM}
                    >
                        Bill
                    </Text>
                </div>
                <div className="flex flex-col">
                    {
                        [1,2,3].map((item, index) => (
                            <div 
                                className={`px-6 py-2 ${index % 2 === 0 && 'bg-[#00000010]'} rounded-md w-full flex justify-between`}
                                key={index}
                            >
                                <Text>
                                    A year
                                </Text>
                                <Text
                                    textColor={theme.colors.text.primary}
                                    bold={TypographyBold.sm2}
                                >
                                    $4,800
                                </Text>
                            </div>
                        ))
                    }
                    <div 
                        className={`px-6 py-2 ${[1,2,3][3 - 1] % 2 === 0 && 'bg-[#00000010]'} rounded-md w-full flex justify-between`}
                    >
                        <Text
                            textColor={theme.colors.text.primary}
                            bold={TypographyBold.sm2}
                        >
                            Total
                        </Text>
                        <Text
                            textColor={theme.colors.text.primary}
                            bold={TypographyBold.sm2}
                        >
                            $4,800
                        </Text>
                    </div>
                </div>
            </div>
            <Button
                text="Check out"
                icon={<MdOutlineShoppingCartCheckout />}
                onClick={hanldeSubmit}
            />
        </div>
    )
}
export default Bill