import { MyWork } from "./MyWork";
import { motion } from "framer-motion";

const initial = {
    y: 100, 
    opacity: 0, 
}

const animate = {
    y: 0, 
    opacity: 1, 
}

const transition = {
    delay: 0.3,
    duration: 0.7, 
}

export function MyPortifolio() {
    return (
        <motion.div 
            initial={initial}
            whileInView={animate}
            transition={transition}
            id="myportifolio"
            className="mx-28 my-16 flex flex-col items-center"
        >
            <h1 className="my-20 font-semibold text-element text-4xl max-sm:my-6">Meu Portifolio</h1>
            <div className="grid grid-cols-3 gap-6 max-[810px]:grid-cols-2 max-sm:flex max-sm:flex-col">
                <MyWork />
                <MyWork />
                <MyWork />
                <MyWork />
                <MyWork />
                <MyWork />
            </div>
        </motion.div>
    )
}