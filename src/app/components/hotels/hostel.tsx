'use client'

import Chip from "@/components/chip/chip"
import Text from "@/styles/components/text"
import { TypographyBold, TypographySize } from "@/styles/style.types"
import theme from "@/styles/theme"
import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5"
import { IoIosBed } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { FaHeart, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"
import Link from "next/link"

const Hostel = () => {
    const ratingChanged = (newRating : number) => {
        console.log(newRating);
      };
    return (
        <div className="w-[275px] rounded-xl bg-bg-transparent-primary p-2 gap-1 flex flex-col">
            <div className="rounded-lg w-full h-[150px] relative overflow-hidden">
                <FaHeart 
                    color="#00000019"
                    className="absolute top-3 right-3 z-[5] cursor-pointer backdrop-filter backdrop-blur-2xl"
                />
                <Link href={'/hostels/1'}>
                    <Image 
                        src={require('@/assets/dev/bg.jpg')} 
                        alt="Profile-icon"
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-110 duration-200 cursor-pointer hover:opacity-70"
                    /> 
                </Link>
            </div>
            <div className="flex w-full justify-between px-1">
                <div className="flex flex-col">
                    <Link href={'/hostels/1'}>
                        <Text
                            textColor={theme.colors.text.primary}
                            size={TypographySize.HM}
                            bold={TypographyBold.sm2}
                            className="hover:!underline hover:!opacity-70"
                        >
                            Franko Hostel
                        </Text>
                    </Link>
                    <div className="flex items-center gap-[1px] ml-[-2px]">
                        <IoLocationSharp 
                            color={theme.colors.text.secondary}
                            size={13}
                        />
                        <Text>
                            Kotei, Kumasi
                        </Text>
                    </div>
                    <div className="ml-[-1px]">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            value={3}
                            size={15}
                            isHalf={true}
                            emptyIcon={<FaRegStar />}
                            halfIcon={<FaStarHalfAlt />}
                            fullIcon={<FaStar />}
                            activeColor={theme.colors.main.primary}
                            edit={false}
                        />
                    </div>
                    <div className="flex gap-1 mt-1 ml-[-2px]">
                        {
                            [1,2,3].map((item, index) => (
                                <Chip
                                    key={index}
                                    className="!bg-[#00000010] !px-3 !py-1"
                                >
                                    <div className="flex items-center gap-1">
                                        <IoIosBed 
                                            color={theme.colors.text.secondary}
                                            size={13}
                                        />
                                        <Text>
                                            3
                                        </Text>
                                    </div>
                                </Chip>
                            ))
                        }
                    </div>
                </div>
                <div className="flex">
                    <Text
                        textColor={theme.colors.text.primary}
                        size={TypographySize.HM}
                        bold={TypographyBold.sm2}
                    >
                        $4,800&nbsp;
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