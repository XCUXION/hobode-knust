'use client'

import Divider from "@/components/divider/divider"
import CardDetails from "./cardDetails"
import BillingAddress from "./billingAddress"
import { useState } from "react"
import { motion } from 'framer-motion';
import { FaCreditCard } from "react-icons/fa"
import theme from "@/styles/theme"
import Text from "@/styles/components/text"
import Input from "@/components/input/input"
import { IoMdLock } from "react-icons/io"
import { TypographyBold } from "@/styles/style.types"

const Telecel = () => {
    const [cardNumber, setCardNumber] = useState<string>('')

    return (
        <motion.div 
            className="w-full flex flex-col gap-6"
            initial={{x : 40, opacity : 0}}
            animate={{x : 0, opacity : 1}}
            exit={{x : 40, opacity : 0}}
        >
            <div className="w-full flex flex-col gap-2">
                <div className="flex w-full flex-col gap-1">
                    <div className="flex gap-1 items-center pl-1">
                        <FaCreditCard
                            color={theme.colors.text.secondary}
                        />
                        <Text>
                            Mobile number
                        </Text>
                    </div>
                    <Input
                        content={cardNumber}
                        setContent={setCardNumber}
                        className="!rounded-md"
                        placeholder="Eg: 059 2340 322"
                        PostIcon={<IoMdLock color={theme.colors.text.secondary} />}
                    />
                </div>
            </div>
        </motion.div>
    )
}
export default Telecel