'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type IPaymentMethodsType = {
    name : string,
    active : boolean,
    logo : any
}

export const PaymentContext = createContext<{
    paymentMethods : IPaymentMethodsType[]
    setPaymentMethods: Dispatch<SetStateAction<IPaymentMethodsType[]>>
}>({
    paymentMethods : [],
    setPaymentMethods : ()=>{}
})

export const PaymentContextProvider = ({
    children
} : {
    children : ReactNode
}) => {
    const [paymentMethods, setPaymentMethods] = useState<IPaymentMethodsType[]>([
        {
            name : 'MTN',
            active : false,
            logo : require("@/assets/prod/mtnMobileMoney.png")
        },
        {
            name : 'AirtelTigo',
            active : false,
            logo : require("@/assets/prod/airteltigoMoney.png")
        },
        {
            name : 'Telecel',
            active : false,
            logo : require("@/assets/prod/telecelCash.jpg")
        },
        {
            name : 'Visa',
            active : true,
            logo : require("@/assets/prod/visa.png")
        },
    ])

    return (
        <PaymentContext.Provider
            value={{
                paymentMethods,
                setPaymentMethods
            }}
        >
            {children}
        </PaymentContext.Provider>
    )
}