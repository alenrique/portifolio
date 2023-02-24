import { Circule } from "./Circule";
import { motion } from "framer-motion";
import Image from "../assets/1676146753296.png"

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

export function Home() {
    const gradient = "linear-gradient(rgba(0,0,0,0),rgb(30,0,44,0.5),rgb(30,0,44,0.75),rgb(30,0,44,1),rgb(30,0,44,1),rgb(30,0,44,0.75),rgb(30,0,44,0.5),rgba(255,0,0,0))"

    return (
        <div className="pt-7 max-sm:flex max-sm:flex-col max-sm:justify-center">
            <div>
                <div className="w-full flex justify-between px-56 absolute z-50 max-[810px]:p-5 max-sm:scale-50 max-sm:-translate-y-20 max-sm:gap-64 max-sm:justify-center">
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2
                        }}
                        animate={{ x: 0, opacity: 1 }}
                        className="flex flex-col gap-9"
                    >
                        <Circule length={180} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" padding={24} margin={{marginTop: 16, marginBottom: 0, marginRight: 0, marginLeft: 0}}/>
                        <Circule length={120} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" padding={24} margin={{marginTop: 44, marginBottom: 0, marginRight: 0, marginLeft: 92}}/>
                        <Circule length={90} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" padding={16} margin={{marginTop: 28, marginBottom: 0, marginRight: 0, marginLeft: 36}}/>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2
                        }}
                        animate={{ x: 0, opacity: 1 }}
                        className="flex flex-col gap-9"
                    >
                        <Circule length={130} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" padding={24} margin={{marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 28}}/>
                        <Circule length={80} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" padding={16} margin={{marginTop: 28, marginBottom: 0, marginRight: 0, marginLeft: 0}}/>
                        <Circule length={190} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" padding={36} margin={{marginTop: 88, marginBottom: 0, marginRight: 0, marginLeft: 36}}/>
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="bg-white opacity-20 rounded-full h-96 w-96 max-sm:w-[288px] max-sm:h-[288px]"
                ></motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5, transform: "translate(8rem, -8rem)" }}
                    animate={{ opacity: 0.2, scale: 1, transform: "translate(8rem, -8rem)" }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="bg-white opacity-20 rounded-full h-40 w-40 max-sm:w-[96px] max-sm:h-[96px]"
                ></motion.div>
                <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="absolute max-sm:scale-75" src={Image} alt="Henrique Alencar" 
                />
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full absolute translate-y-44" 
                    style={{height: "600px", backgroundImage: gradient}}
                ></motion.div>
                <motion.div 
                    initial={initial} 
                    whileInView={animate} 
                    transition={transition} 
                    className="mt-28 flex flex-col justify-center items-center text-element z-50 max-sm:w-full"
                >
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-2xl max-sm:text-[18px]">Oi, Eu Sou</h1>
                        <h1 className="font-semibold text-7xl max-sm:text-[54px]">Henrique</h1>
                    </div>
                    <p className="mt-6">Full Stack</p>
                    <div className="flex gap-12 m-16 max-sm:gap-7">
                        <button className="h-12 w-40 p-6 rounded-md border-2 border-element bg-element flex justify-center items-center text-black font-bold font-['Darker_Grotesque'] transition-all duration-200 hover:scale-110">DOWNLOAD CV</button>
                        <a href="#aboutme"><button className="h-12 w-40 p-6 rounded-md border-2 border-element flex justify-center items-center text-element font-bold font-['Darker_Grotesque'] transition-all duration-200 hover:scale-110">VAMOS LÁ</button></a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}