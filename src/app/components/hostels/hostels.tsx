import Hostel from "./hostel"
import Resize from "@/components/resize/resize"

const Hostels = () => {
    return (
        <Resize>
            <div className="flex w-full gap-4 flex-wrap">
                {
                    Array.from({length : 30}).map((item, index) => (
                        <Hostel key={index} />
                    ))
                }
            </div>
        </Resize>
    )
}
export default Hostels