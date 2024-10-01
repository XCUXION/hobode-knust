'use client'

import Chip from "@/components/chip/chip"
import Searchbar from "@/components/search/search"
import Text from "@/styles/components/text"
import theme from "@/styles/theme"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaBell, FaHeart } from "react-icons/fa6"

const Topbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
        <div className={`fixed z-10 px-8 top-0 w-full h-[70px] flex justify-center items-center border-b-[1px] border-b-solid border-b-border-primary`}>
            <Image 
                src={require('@/assets/dev/bg.jpg')} 
                alt="Profile-icon"
                fill
                style={{ objectFit: "cover" }}
            /> 
            <div className="w-full h-full bg-[#fffffff0] backdrop-filter backdrop-blur-2xl absolute"></div>
            <div className={`absolute px-8 w-full flex items-center justify-center`}>
                <div className="w-full max-w-[1440px] flex justify-between">
                    <Text 
                        textColor={theme.colors.text.primary}
                        className="flex items-center"    
                    >
                        Hobode
                    </Text>
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-4">
                            <Searchbar />
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaHeart 
                                color={theme.colors.text.secondary}
                                className="hover:opacity-70 duration-150 cursor-pointer"
                            />
                            <div className="relative">
                                <div className="absolute top-[-5px] right-[-5px] bg-main-primary rounded-full w-[8px] h-[8px]"></div>
                                <FaBell 
                                    color={theme.colors.main.primary}
                                    className="hover:opacity-70 duration-150 cursor-pointer"
                                />
                            </div>
                            <Chip
                                className="!px-1 !gap-1 !pr-2"
                            >
                                <div className="relative w-[20px] h-[20px] bg-bg-tetiary rounded-full">
                                    <Image 
                                        src={require('@/assets/dev/profile-icon.png')} 
                                        alt="Profile-icon"
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <Text>
                                    Prince Nedjoh
                                </Text>
                            </Chip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar