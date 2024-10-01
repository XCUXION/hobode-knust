'use client'

import Text from "@/styles/components/text"
import Image from "next/image"

const Hostel = () => {
    return (
        <div className="w-[275px] rounded-xl bg-bg-transparent-primary p-2 gap-1 flex flex-col">
            <div className="rounded-lg w-full h-[150px] relative overflow-hidden">
                <Image 
                    src={require('@/assets/dev/bg.jpg')} 
                    alt="Profile-icon"
                    fill
                    style={{ objectFit: "cover" }}
                /> 
            </div>
            <div className="flex w-full justify-between px-1">
                <div className="flex flex-col gap-1">
                    <Text>
                        Franko Hostel
                    </Text>
                </div>
                <div className="flex">
                    <Text>
                        $4,800
                    </Text>
                    <Text>
                        /year
                    </Text>
                </div>
            </div>
        </div>
    )
}
export default Hostel