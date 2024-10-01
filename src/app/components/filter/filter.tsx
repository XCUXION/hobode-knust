import Sheet from "@/components/sheet/sheet"
import Text from "@/styles/components/text"
import { TypographySize } from "@/styles/style.types"
import theme from "@/styles/theme"
import { Dispatch, SetStateAction } from "react"
import { IoClose } from "react-icons/io5"

const Filter = ({
    show,
    setShow
} : {
    show : boolean
    setShow : Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <div>
            <Sheet
                show={show}
                setShow={setShow}
            >
                <div className="p-4">
                    <div className="flex w-full justify-between">
                        <Text
                            textColor={theme.colors.text.primary}
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
            </Sheet>
        </div>
    )
}
export default Filter