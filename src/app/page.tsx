import AppTypography from "@/styles/components/appTypography"
import Suggestions from "./components/suggestions/suggestions"
import Hostels from "./components/hostels/hostels"

const Home = () => {
    return (
      <div className="w-full flex flex-col gap-3 md:gap-4">
        <Suggestions />
        <Hostels />
      </div>
    )
}
export default Home