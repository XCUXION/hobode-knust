import Chip from "@/components/chip/chip"
import Sheet from "@/components/sheet/sheet"
import Text from "@/styles/components/text"
import { TypographyBold, TypographySize } from "@/styles/style.types"
import theme from "@/styles/theme"
import { Dispatch, SetStateAction, useState } from "react"
import { IoIosBed } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { Slider } from 'antd';

const Filter = ({
    show,
    setShow
} : {
    show : boolean
    setShow : Dispatch<SetStateAction<boolean>>
}) => {
    const [priceRange, setPriceRange] = useState([2000, 10000])
    return (
        <div>
            <Sheet
                show={show}
                setShow={setShow}
            >
                <div className="flex flex-col gap-2 pt-4">
                    <div className="px-4">
                        <div className="flex w-full justify-between">
                            <Text
                                textColor={theme.colors.text.primary}
                                bold={TypographyBold.md}
                                size={TypographySize.HM}
                            >
                                Filter
                            </Text>
                            <IoClose 
                                color={theme.colors.text.secondary}
                                size={25}
                                className="cursor-pointer hover:opacity-80"
                                onClick={()=>setShow(false)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 px-4">
                        <div className="flex flex-col gap-1 w-full rounded-md bg-bg-transparent-primary p-2 px-3">
                            <Text
                                textColor={theme.colors.text.primary}
                                bold={TypographyBold.sm2}
                            >
                                Price Range
                            </Text>
                            <div className="w-full">
                                <Slider 
                                    range 
                                    defaultValue={[2000, 10000]}
                                    value={priceRange}
                                    onChange={setPriceRange}
                                    min={10}
                                    max={30000}
                                    keyboard
                                    
                                    styles={{
                                        track: {
                                            background: 'transparent',
                                          },
                                        tracks : {
                                            backgroundColor : theme.colors.main.primary
                                        }
                                    }}
                                />
                            </div>
                            <div className="w-full flex justify-between">
                                <Text>
                                    Min: &nbsp;
                                    <Text 
                                        textColor={theme.colors.text.primary}
                                        bold={TypographyBold.sm2}
                                    >
                                        ${priceRange[0]}
                                    </Text>
                                </Text>
                                <Text>
                                    Max: &nbsp;
                                    <Text
                                        textColor={theme.colors.text.primary}
                                        bold={TypographyBold.sm2}
                                    >
                                        ${priceRange[1]}
                                    </Text>
                                </Text>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full rounded-md bg-bg-transparent-primary p-2 px-3">
                            <Text
                                textColor={theme.colors.text.primary}
                                bold={TypographyBold.sm2}
                            >
                                Room Type
                            </Text>
                            <div className="flex gap-3 ml-[-2px] flex-wrap w-full">
                                {
                                    [1,2,3,4,5,6,7].map((item, index) => (
                                        <Chip
                                            key={index}
                                            className="!px-3 !py-1 !bg-[#80808023] hover:!bg-[#80808035]"
                                        >
                                            <div className="flex items-center gap-1">
                                                <IoIosBed
                                                    color={theme.colors.text.secondary}
                                                    size={13}
                                                />
                                                <Text>
                                                    3 in a room
                                                </Text>
                                            </div>
                                        </Chip>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full rounded-md bg-bg-transparent-primary p-2 px-3">
                            <Text
                                textColor={theme.colors.text.primary}
                                bold={TypographyBold.sm2}
                            >
                                Armenities
                            </Text>
                            <div className="flex gap-3 ml-[-2px] flex-wrap w-full">
                                {
                                    [1,2,3,4,5,6,7].map((item, index) => (
                                        <Chip
                                            key={index}
                                            className="!px-3 !py-1 !bg-[#80808023] hover:!bg-[#80808035]"
                                        >
                                            <div className="flex items-center gap-1">
                                                <IoIosBed
                                                    color={theme.colors.text.secondary}
                                                    size={13}
                                                />
                                            </div>
                                        </Chip>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Sheet>
        </div>
    )
}
export default Filter