'use client'

import Image from "next/image"
import { useContext, useState } from "react"
import { PaymentContext } from "../context/paymentContext"

const PaymentMethods = () => {
    const {paymentMethods, setPaymentMethods} = useContext(PaymentContext)

    const setActivePaymentMethods = (name : string) => {
        setPaymentMethods(prev => {
            return prev.map((item) => {
                if(item.name === name){
                    return {
                        ...item,
                        active : true
                    }
                } else {
                    return {
                        ...item,
                        active : false
                    }
                }
            })
        })
    }
    return (
        <div className="flex gap-2 flex-wrap">
            {
                paymentMethods.map((item, index) => (
                    <div 
                        className={`flex cursor-pointer hover:scale-[1.05] duration-200 p-4 overflow-hidden rounded-md bg-bg-transparent-primary justify-center items-center ${item.active && 'border-[1px] border-solid border-main-primary bg-[#db950a15]'}`}
                        key={index}
                        onClick={()=>setActivePaymentMethods(item.name)}
                    >
                        <Image
                            src={item.logo} 
                            alt="logo"
                            style={{
                                objectFit: "contain"
                            }}
                            className="md:h-[40px] h-[30px] max-w-[60px] md:max-w-[80px]"
                        /> 
                    </div>
                ))
            }
        </div>
    )
}
export default PaymentMethods