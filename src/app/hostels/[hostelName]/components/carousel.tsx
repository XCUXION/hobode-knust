'use client'

import Carousel from "@/components/carousel/carousel"
import Resize from "@/components/resize/resize"
import Image from "next/image"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const CarouselContainer = () => {
    const [carouselData, setCarouselData] = useState([1,2,3,4,5])
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className="w-full max-w-[1024px] flex flex-col gap-2">
            <div className="max-w-[1100px] flex flex-col">
                <div className="w-full h-[300px] md:h-[400px] md:px-8 overflow-hidden">
                    <Carousel 
                        className="md:rounded-xl"
                        carouselData={carouselData}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                </div>
                <div className="SliderContainer w-full md:overflow-visible overflow-x-auto">
                    <div className="Slider pl-4 md:pl-0 md:justify-center flex py-2 min-w-full ">
                        <div className="flex gap-4">
                            {
                                carouselData.map((image, index) => (
                                    <div 
                                        className={`${currentIndex === index && 'md:shadow-custom-shadow border-solid border-[3px] border-[#00000046]'} h-[70px] md:h-[100px] relative overflow-hidden w-[70px] md:w-[100px] rounded-lg bg-bg-primary`}
                                        key={index}
                                        onClick={()=>setCurrentIndex(index)}
                                    >
                                        <Image
                                            src={require('@/assets/dev/bg.jpg')} 
                                            alt="test-bg"
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="lg:hover:scale-[1.2] duration-200 cursor-pointer hover:lg:opacity-70"
                                        /> 
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarouselContainer