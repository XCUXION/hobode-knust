'use client'

import Resize from "@/components/resize/resize"
import Crumbs from "./components/crumbs"
import { useState } from "react"
import PaymentMethods from "./components/paymentMethods"
import Divider from "@/components/divider/divider"
import CardDetails from "./components/cardDetails"
import BillingAddress from "./components/billingAddress"
import Bill from "./components/bill"

const Checkout = () => {
    const [cardNumber, setCardNumber] = useState<string>('')
    
    return (
        <Resize>
            <div className="flex flex-col gap-4 w-full items-center">
                <div className="flex flex-col gap-4 w-full max-w-[1024px] items-center">
                    <div className="flex flex-col gap-2 w-full">
                        <Crumbs />
                    </div>
                    <div className="flex gap-8 w-full max-w-[1024px]">
                        <div className="flex flex-col gap-4 w-[500px]">
                            <PaymentMethods />
                            <div className="w-full flex flex-col gap-6">
                                <CardDetails 
                                    cardNumber={cardNumber}
                                    setCardNumber={setCardNumber}
                                />
                                <Divider />
                                <BillingAddress 
                                    cardNumber={cardNumber}
                                    setCardNumber={setCardNumber}
                                />
                            </div>
                        </div>
                        <Bill />
                    </div>
                </div>
            </div>
        </Resize>
    )
}
export default Checkout