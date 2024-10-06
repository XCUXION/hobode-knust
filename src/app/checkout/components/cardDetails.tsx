import Input from "@/components/input/input"
import Text from "@/styles/components/text"
import { TypographyBold } from "@/styles/style.types"
import theme from "@/styles/theme"
import { Dispatch, SetStateAction } from "react"
import { FaCreditCard } from "react-icons/fa"
import { IoMdLock } from "react-icons/io"
import { MdDateRange } from "react-icons/md"

const CardDetails = ({
    cardNumber,
    setCardNumber
} : {
    cardNumber : string,
    setCardNumber : Dispatch<SetStateAction<string>>
}) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <Text
                textColor={theme.colors.text.primary}
                bold={TypographyBold.sm2}
                className="pl-1"
            >
                Card Details
            </Text>
            <div className="w-full flex flex-col gap-4">
                <div className="flex w-full flex-col gap-1">
                    <div className="flex gap-1 items-center pl-1">
                        <FaCreditCard
                            color={theme.colors.text.secondary}
                        />
                        <Text>
                            Card number
                        </Text>
                    </div>
                    <Input
                        content={cardNumber}
                        setContent={setCardNumber}
                        className="!rounded-md"
                        placeholder="0000 0000 000"
                        PostIcon={<IoMdLock color={theme.colors.text.secondary} />}
                    />
                </div>
                <div className="w-full flex gap-3">
                    <div className="flex w-full flex-col gap-1">
                        <div className="flex gap-1 items-center pl-1">
                            <MdDateRange
                                color={theme.colors.text.secondary}
                            />
                            <Text>
                                Expiration
                            </Text>
                        </div>
                        <Input 
                            content={cardNumber}
                            setContent={setCardNumber}
                            className="!rounded-md"
                            placeholder="dd-mm-yy"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-1">
                        <div className="flex gap-1 items-center pl-1">
                            <IoMdLock 
                                color={theme.colors.text.secondary}
                            />
                            <Text>
                                CCV
                            </Text>
                        </div>
                        <Input 
                            content={cardNumber}
                            setContent={setCardNumber}
                            className="!rounded-md"
                            placeholder="0000"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardDetails