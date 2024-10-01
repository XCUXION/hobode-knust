import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, ReactNode, SetStateAction } from 'react';
const Sheet = ({
    show,
    setShow,
    containerStyles,
    children
} : {
    show : boolean
    setShow : Dispatch<SetStateAction<boolean>>
    containerStyles? : string,
    children? : ReactNode
}) => {
    return (
        <AnimatePresence>
            {
                show &&
                <div>
                    <motion.div 
                        initial={{
                            opacity : 0
                        }}
                        animate={{
                            opacity : 1
                        }}
                        exit={{
                            opacity : 0
                        }} 
                        className='bg-[#00000025] backdrop-filter z-10 backdrop-blur-sm fixed w-full h-full top-0 left-0'
                        onClick={()=>setShow(false)}
                    >
                    </motion.div>
                    <motion.div 
                        initial={{
                            x : 200,
                            opacity : 0
                        }}
                        animate={{
                            x : 0,
                            opacity : 1
                        }}
                        exit={{
                            x : 200,
                            opacity : 0
                        }}
                        transition={{
                            type : 'spring',
                            bounce : 0.2,
                            duration : 0.15
                        }}
                        className={`bg-[#ffffffd9] backdrop-filter z-10 backdrop-blur-lg w-[400px] h-full fixed right-0 top-0 ${containerStyles}`}
                    >
                        {children}
                    </motion.div>
                </div>
            }
        </AnimatePresence>
    )
}
export default Sheet