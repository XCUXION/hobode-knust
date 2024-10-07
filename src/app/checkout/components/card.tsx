'use client'

import Divider from "@/components/divider/divider"
import CardDetails from "./cardDetails"
import BillingAddress from "./billingAddress"
import { useState } from "react"
import { motion } from 'framer-motion';

const Card = () => {
    const [cardNumber, setCardNumber] = useState<string>('')

    return (
        <motion.div 
            className="w-full flex flex-col gap-6"
            initial={{x : 40, opacity : 0}}
            animate={{x : 0, opacity : 1}}
            exit={{x : 40, opacity : 0}}
        >
            <CardDetails
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
            />
            <Divider />
            <BillingAddress
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
            />
        </motion.div>
    )
}
export default Card