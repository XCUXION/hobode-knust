import Resize from "@/components/resize/resize"
import AppTypography from "@/styles/components/appTypography"
import Suggestions from "./components/suggestions/suggestions"
import Hostels from "./components/hotels/hostels"

const Home = () => {
    return (
      <Resize>
        <div className="w-full flex flex-col gap-4">
          <Suggestions />
          <Hostels />
        </div>
      </Resize>
    )
}
export default Home