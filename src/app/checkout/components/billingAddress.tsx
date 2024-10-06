import Input from "@/components/input/input"
import Text from "@/styles/components/text"
import { TypographyBold } from "@/styles/style.types"
import theme from "@/styles/theme"
import { Dispatch, SetStateAction } from "react"
import { BiSolidCity } from "react-icons/bi"
import { FaAddressBook, FaBarcode } from "react-icons/fa"
import { IoMdLock } from "react-icons/io"
import { TbCurrentLocation } from "react-icons/tb"

const BillingAddress = ({
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
                Billing Address
            </Text>
            <div className="w-full flex flex-col gap-4">
                <div className="flex w-full flex-col gap-1">
                    <div className="flex gap-1 items-center pl-1">
                        <FaAddressBook
                            color={theme.colors.text.secondary}
                        />
                        <Text>
                            Street Address
                        </Text>
                    </div>
                    <Input
                        content={cardNumber}
                        setContent={setCardNumber}
                        className="!rounded-md"
                        placeholder="Ablekuma Jucntion PO box 1009"
                        PostIcon={<IoMdLock color={theme.colors.text.secondary} />}
                    />
                </div>
                <div className="flex w-full flex-col gap-1">
                    <div className="flex gap-1 items-center pl-1">
                        <BiSolidCity
                            color={theme.colors.text.secondary}
                        />
                        <Text>
                            City
                        </Text>
                    </div>
                    <Input 
                        content={cardNumber}
                        setContent={setCardNumber}
                        className="!rounded-md"
                        placeholder="Accra"
                        PostIcon={<IoMdLock color={theme.colors.text.secondary} />}
                    />
                </div>
                <div className="w-full flex gap-3">
                    <div className="flex w-full flex-col gap-1">
                        <div className="flex gap-1 items-center pl-1">
                            <TbCurrentLocation
                                color={theme.colors.text.secondary}
                            />
                            <Text>
                                State
                            </Text>
                        </div>
                        <Input 
                            content={cardNumber}
                            setContent={setCardNumber}
                            className="!rounded-md"
                            placeholder="Greater Accra"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-1">
                        <div className="flex gap-1 items-center pl-1">
                            <FaBarcode
                                color={theme.colors.text.secondary}
                            />
                            <Text>
                                Zip Code
                            </Text>
                        </div>
                        <Input 
                            content={cardNumber}
                            setContent={setCardNumber}
                            className="!rounded-md"
                            placeholder="Zip Code"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BillingAddress