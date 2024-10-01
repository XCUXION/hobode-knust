'use client'

import Chip from "@/components/chip/chip"
import AppTypography from "@/styles/components/appTypography"
import Text from "@/styles/components/text"
import theme from "@/styles/theme"
import { FaSortAmountDownAlt } from "react-icons/fa"
import { IoFilterSharp } from "react-icons/io5"
import Filter from "../filter/filter"
import { useState } from "react"

const Suggestions = () => {
    const [showFilter, setShowFilter] = useState(false)
    return (
        <div>
            <Filter show={showFilter} setShow={setShowFilter}/>
            <div className="w-full flex justify-between">
                <div className="gap-2 flex items-center">
                    <AppTypography>
                        230 Hostels
                    </AppTypography>
                    <Chip className="!border-main-primary bg-[#db950a18] hover:bg-[#db950a3d]">
                        <Text
                            textColor={theme.colors.main.primary}
                        >
                            Homestel
                        </Text>
                    </Chip>
                    {
                        [1,2,3,4,5,6].map((item, index) => (
                            <Chip
                                key={index}
                            >
                                <Text>
                                    Apartment
                                </Text>
                            </Chip>
                        ))
                    }
                </div>
                <div className="flex gap-2">
                    <Chip className="gap-1">
                        <FaSortAmountDownAlt 
                            color={theme.colors.text.secondary}
                            size={12}
                        />
                        <Text>
                            Sort
                        </Text>
                    </Chip>
                    <Chip 
                        className="gap-1"
                        onClick={()=>setShowFilter(true)}
                    >
                        <IoFilterSharp 
                            color={theme.colors.text.secondary}
                            size={12}
                        />
                        <Text>
                            Filter
                        </Text>
                    </Chip>
                </div>
            </div>
        </div>
    )
}
export default Suggestions