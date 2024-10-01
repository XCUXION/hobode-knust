import Hostel from "./hostel"

const Hostels = () => {
    return (
        <div className="flex w-full justify-between gap-4 flex-wrap">
            {
                Array.from({length : 30}).map((item, index) => (
                    <div
                        key={index}
                    >
                        <Hostel />
                    </div>
                ))
            }
        </div>
    )
}
export default Hostels