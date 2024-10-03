import theme from "@/styles/theme"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"

const Ratings = ({
    rating,
    length
} : {
    rating : number,
    length? : number
}) => {
    return (
        <div className="ml-[-1px] flex gap-1">
            {
                Array.from({length : length ?? 5}).map((star, index) => (
                    index < rating - 1 ?
                    <FaStar key={index} color={theme.colors.main.primary} size={13}/>
                    : index - 0.5 === rating - 1 ?
                    <FaStarHalfAlt key={index} color={theme.colors.main.primary} size={13}/>
                    :
                    <FaRegStar key={index} color={theme.colors.main.primary} size={13}/>
                ))
            }
        </div>
    )
}
export default Ratings