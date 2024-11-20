'use client'

import Resize from "@/components/resize/resize"
import Crumbs from "./components/crumbs"
import { useContext, useEffect, useState } from "react"
import PaymentMethods from "./components/paymentMethods"
import Bill from "./components/bill"
import Card from "./components/card"
import { PaymentContext } from "./context/paymentContext"
import React from "react"
import { AnimatePresence, motion } from 'framer-motion';
import MTN from "./components/mtn"
import Telecel from "./components/telecel"
import AirtelTigo from "./components/airtelTigo"

const Checkout = () => {
    const {paymentMethods, setPaymentMethods} = useContext(PaymentContext)
    const [paymentActiveMethodName, setActivePaymentMethodName] = useState<string>()

    const getActivePaymentMethodName = () => {
        paymentMethods.map((item) => {
            console.log(item.name)
            if(item.active === true){
                setActivePaymentMethodName(item.name) 
            }
        })
    }

    useEffect(()=>{
        getActivePaymentMethodName()
    },[paymentMethods])
    
    return (
        <Resize>
            <div className="flex flex-col gap-4 w-full items-center">
                <div className="flex flex-col gap-4 w-full max-w-[1024px] items-center">
                    <div className="flex flex-col gap-2 w-full">
                        <Crumbs />
                    </div>
                    <div className="flex flex-wrap gap-8 w-full max-w-[1024px]">
                        <div className="flex flex-col gap-4 w-full md:w-[500px]">
                            <PaymentMethods />
                            <AnimatePresence>
                                {
                                    paymentActiveMethodName === 'Visa' ?
                                    <Card />
                                    : paymentActiveMethodName === 'MTN' ?
                                    <MTN />
                                    : paymentActiveMethodName === 'Telecel' ?
                                    <Telecel />
                                    : paymentActiveMethodName === 'AirtelTigo' ?
                                    <AirtelTigo />
                                    :
                                    <></>
                                }
                            </AnimatePresence>
                        </div>
                        <Bill />
                    </div>
                </div>
            </div>
        </Resize>
    )
}
export default Checkout