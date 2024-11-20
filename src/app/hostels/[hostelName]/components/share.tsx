import Chip from "@/components/chip/chip"
import Text from "@/styles/components/text"
import theme from "@/styles/theme"
import { FaHeart, FaShare } from "react-icons/fa"

const Share = () => {
    return (
        <>
            <div className="hidden md:flex gap-2">
                <Chip className="gap-1">
                    <FaShare
                        color={theme.colors.text.secondary}
                        size={13}
                    />
                    <Text>
                        Share
                    </Text>
                </Chip>
                <Chip className="gap-1">
                    <FaHeart
                        color={theme.colors.text.secondary}
                        size={13}
                    />
                    <Text>
                        Favorite
                    </Text>
                </Chip>
            </div>
            <div className="md:hidden flex gap-4">
                <FaShare
                    color={theme.colors.text.tetiary}
                    size={20}
                />
                <FaHeart
                    color={theme.colors.bg.tetiary}
                    size={20}
                />
            </div>
        </>
    )
}
export default Share