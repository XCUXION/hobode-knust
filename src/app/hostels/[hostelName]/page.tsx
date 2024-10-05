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
        <Resize>
            <div className="flex flex-col gap-2 w-full mt-[-10px]">
                <div className="flex w-full justify-between items-center">
                    <Crumbs />
                    <Share />
                </div>
                <Carousel />
                <div className="flex gap-2 lg:gap-14 flex-wrap">
                    <HostelDetails />
                    <Bill />
                </div>
            </div>
        </Resize>
    )
}
export default ViewHostel