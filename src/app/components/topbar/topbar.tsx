'use client'

import Chip from "@/components/chip/chip"
import Searchbar from "@/components/search/search"
import Text from "@/styles/components/text"
import theme from "@/styles/theme"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaBell, FaHeart, FaMagnifyingGlass } from "react-icons/fa6"
import UserProfile from "./components/userProfile"
import { useRouter } from "next/navigation"
import MobileUserProfile from "./components/mobileUserProfile"
import { BsFilterCircleFill } from "react-icons/bs";

const Topbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const router = useRouter()

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
        <div className={`fixed z-10 px-8 top-0 w-full h-[50px] md:h-[70px] bg-white md:bg-transparent flex justify-center items-center border-b-[1px] border-b-solid border-b-border-primary`}>
            <div className="hidden md:block">
                <Image 
                    src={require('@/assets/dev/bg.jpg')} 
                    alt="Profile-icon"
                    fill
                    style={{ objectFit: "cover" }}
                /> 
            </div>
            <div className="w-full hidden md:block h-full bg-[#fffffff0] backdrop-filter backdrop-blur-2xl absolute"></div>
            <div className={`absolute px-4 md:px-8 w-full flex items-center justify-center`}>
                <div className="w-full md:max-w-[1440px] flex justify-between items-center">
                    <span onClick={()=>router.push('/')} className="h-fit">
                        <Text 
                            textColor={theme.colors.text.primary}
                            className="flex items-center cursor-pointer hover:!opacity-[0.7]"    
                        >
                            Hobode
                        </Text>
                    </span>
                    <div className="flex gap-4 items-center">
                        <div className="md:flex gap-4 hidden">
                            <Searchbar />
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaHeart 
                                color={theme.colors.text.secondary}
                                className="hover:opacity-70 hidden md:block duration-150 cursor-pointer w-[20px] h-[20px] md:w-[15px] md:h-[15px]"
                            />
                            <FaMagnifyingGlass 
                                color={theme.colors.text.secondary}
                                className="hover:opacity-70 md:hidden block duration-150 cursor-pointer w-[20px] h-[20px] md:w-[15px] md:h-[15px]"
                            />
                            <BsFilterCircleFill 
                                color={theme.colors.text.secondary}
                                className="hover:opacity-70 md:hidden block duration-150 cursor-pointer w-[20px] h-[20px] md:w-[15px] md:h-[15px]"
                            />
                            <div className="relative hidden md:block">
                                <div className="absolute top-[-5px] right-[-5px] bg-main-primary rounded-full w-[8px] h-[8px]"></div>
                                <FaBell 
                                    color={theme.colors.main.primary}
                                    className="hover:opacity-70 duration-150 cursor-pointer h-[20px] w-[20px] md:w-[15px] md:h-[15px]"
                                />
                            </div>
                            <div className="hidden md:block">
                                <UserProfile />
                            </div>
                            <div className="relative block md:hidden">
                                <div className="absolute top-[-5px] right-[-5px] bg-main-primary rounded-full w-[8px] h-[8px]"></div>
                                <MobileUserProfile />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar