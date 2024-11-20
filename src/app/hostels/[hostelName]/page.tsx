'use client'

import Link from "@/components/link/link"
import Resize from "@/components/resize/resize"
import Text from "@/styles/components/text"
import theme from "@/styles/theme"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import Crumbs from "./components/crumbs"
import Chip from "@/components/chip/chip"
import { FaHeart, FaShare } from "react-icons/fa"
import Share from "./components/share"
import Carousel from "./components/carousel"
import Ratings from "@/components/ratings/ratings"
import { TypographyBold, TypographySize } from "@/styles/style.types"
import { IoLocationSharp, IoReceipt } from "react-icons/io5"
import { IoIosBed } from "react-icons/io"
import Divider from "@/components/divider/divider"
import UserProfile from "@/app/components/topbar/components/userProfile"
import HostelDetails from "./components/hostelDetails"
import Bill from "./components/bill"

const ViewHostel = () => {
    const pathname = useParams()
    const {hostelName} = pathname

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col gap-2 max-w-[1024px] w-full mt-[-4px] md:mt-[-10px] items-center">
                <Resize>
                    <div className="flex w-full justify-between mb-1 items-center">
                        <Crumbs />
                        <Share />
                    </div>
                </Resize>
                <div className="flex flex-col gap-1 md:gap-4 w-full max-w-[1440px] items-center">
                    <Carousel />
                    <Resize>
                        <div className="flex-col md:flex-row flex w-full max-w-[1024px] md:gap-14 gap-4 flex-wrap">
                            <HostelDetails />
                            <Bill />
                        </div>
                    </Resize>
                </div>
            </div>
        </div>
    )
}
export default ViewHostel