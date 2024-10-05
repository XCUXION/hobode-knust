import Resize from "@/components/resize/resize"
import Crumbs from "./components/crumbs"

const Checkout = () => {
    return (
        <Resize>
            <div className="flex flex-col gap-2">
                <Crumbs />
            </div>
        </Resize>
    )
}
export default Checkout