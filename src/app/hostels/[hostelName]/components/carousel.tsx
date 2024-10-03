const Carousel = () => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="max-w-[1000px] h-[400px] rounded-xl bg-bg-primary">

            </div>
            <div className="flex gap-4">
                {
                    [1,2,3,4].map((image, index) => (
                        <div 
                            className="h-[100px] w-[100px] rounded-lg bg-bg-primary"
                            key={index}
                        >

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Carousel