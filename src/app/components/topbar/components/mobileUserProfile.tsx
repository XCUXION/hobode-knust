import Image from "next/image"

const MobileUserProfile = () => {
    return (
        <div className="relative w-[24px] h-[24px] bg-bg-tetiary rounded-full">
            <Image
                src={require('@/assets/dev/profile-icon.png')} 
                alt="Profile-icon"
                fill
                style={{ objectFit: "contain" }}
            />
        </div>
    )
}
export default MobileUserProfile