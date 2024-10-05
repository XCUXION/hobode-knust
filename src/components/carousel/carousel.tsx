'use client'

import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Carousel = ({
    currentIndex,
    carouselData,
    setCurrentIndex
} : {
    currentIndex : number
    carouselData : any[]
    setCurrentIndex: Dispatch<SetStateAction<number>>
}) => {
    const handleSwipeRight = () => {
        if(carouselData.length - 1 !== currentIndex){
            setCurrentIndex(prev => prev + 1)
        }
    }

    const handleSwipeLeft = () => {
        if(currentIndex !== 0){
            setCurrentIndex(prev => prev - 1)
        }
    }

    return (
        <div className="w-full h-full overflow-hidden relative">
            <div
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {
                    carouselData.map((item, index) => (
                        <div 
                            className="min-w-full h-full relative"
                            key={index}
                        >
                            <Image
                                src={require('@/assets/dev/bg.jpg')} 
                                alt="test-bg"
                                fill
                                style={{ objectFit: "cover" }}
                                className="hover:lg:scale-[1.02] duration-200 cursor-pointer"
                            /> 
                        </div>
                    ))
                }
            </div>
            <div 
                className="absolute top-[48%] left-8 bg-[#00000082] hover:bg-[#0000002f] cursor-pointer duration-100 backdrop-filter backdrop-blur-lg p-3 rounded-full"
                onClick={handleSwipeLeft}
            >
                <FaChevronLeft
                    color="white"
                />
            </div>
            <div    
                className="absolute top-[48%] right-8 bg-[#00000082] hover:bg-[#0000002f] cursor-pointer duration-100 backdrop-filter backdrop-blur-lg p-3 rounded-full"
                onClick={handleSwipeRight}
            >
                <FaChevronRight
                    color="white"
                />
            </div>
            <div className="absolute bottom-6 justify-center flex left-0 w-full">
                <div className="flex gap-2 items-center">
                    {
                        carouselData.map((item : any, index : number) => (
                            <div 
                                className={`${index === currentIndex ? 'w-[12px] h-[12px] bg-[#db950ad6]' : 'hover:scale-[1.2]'} cursor-pointer duration-200 w-[8px] backdrop-filter backdrop-blur-md shadow-lg h-[8px] rounded-full bg-[#0000002f]`}
                                key={index}
                                onClick={()=>setCurrentIndex(index)}
                            ></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Carousel