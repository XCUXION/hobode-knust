'use client'

import { useState } from "react"

const PaymentMethods = () => {
    const [paymentMethods, setPaymentMethods] = useState([
        {
            name : 'MTN',
            active : false
        },
        {
            name : 'AirtelTigo',
            active : false
        },
        {
            name : 'Telecel',
            active : false
        },
        {
            name : 'Visa',
            active : true
        },
    ])
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
        <div className="flex gap-2">
            {
                paymentMethods.map((item, index) => (
                    <div 
                        className={`flex cursor-pointer hover:scale-[1.05] duration-200 p-4 min-w-[120px] min-h-[70px] rounded-md bg-bg-transparent-primary justify-center items-center ${item.active && 'border-[1px] border-solid border-main-primary bg-[#db950a15]'}`}
                        key={index}
                        onClick={()=>setActivePaymentMethods(item.name)}
                    >

                    </div>
                ))
            }
        </div>
    )
}
export default PaymentMethods