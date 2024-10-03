import Chip from "@/components/chip/chip"
import Text from "@/styles/components/text"
import Image from "next/image"

const UserProfile = () => {
    return (
        <Chip
            className="!px-1 !gap-1 !pr-2"
        >
            <div className="relative w-[20px] h-[20px] bg-bg-tetiary rounded-full">
                <Image
                    src={require('@/assets/dev/profile-icon.png')} 
                    alt="Profile-icon"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            <Text>
                Prince Nedjoh
            </Text>
        </Chip>
    )
}
export default UserProfile