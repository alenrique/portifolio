import { Medal, Files } from "phosphor-react"
import { motion } from "framer-motion"
import Image from "../assets/62253995.jpg"

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

export function AboutMe() {
    return (
        <motion.div 
            initial={initial}
            whileInView={animate}
            transition={transition}
            className="mx-56 my-16 flex flex-col items-center max-sm:justify-center max-sm:mx-6"
        >
            <h1 className="mb-28 font-semibold text-element text-4xl max-sm:mb-6" id="aboutme">Sobre Mim</h1>
            <div className="flex gap-10 max-[810px]:flex-col max-[810px]:gap-20 max-[810px]:items-center">
                <div className="relative">
                    <div className="w-96 h-96 rounded-3xl bg-white opacity-20 -z-20 absolute rotate-6 max-sm:w-[288px] max-sm:h-[288px]"></div>
                    <div className="w-96 h-96 rounded-3xl bg-white -z-10 absolute -rotate-6 max-sm:w-[288px] max-sm:h-[288px]"></div>
                    <div className="w-96 h-96 rounded-3xl max-sm:w-[288px] max-sm:h-[288px]">
                        <img className=" rounded-3xl" src={Image} alt="Henrique Alencar" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 max-[810px]:items-center max-[810px]:gap-6">
                    <div className="flex gap-3">
                        <div className="bg-element w-52 h-52 rounded-xl flex items-center justify-center flex-col max-sm:w-[156px] max-sm:h-[156px]">
                            <Medal size={32} color="black" />
                            <p className="text-black font-medium text-lg">Experiência</p>
                            <p className="font-medium text-xs mt-2">+2 anos de <br /> experiência</p>
                        </div>
                        <div className="bg-element w-52 h-52 rounded-xl flex items-center justify-center flex-col max-sm:w-[156px] max-sm:h-[156px]">
                            <Files size={32} color="black" weight="fill" />
                            <p className="text-black font-medium text-lg">Projetos</p>
                            <p className="font-medium text-xs mt-2">+10 Completos</p>
                        </div>
                    </div>
                    <p className="text-element">Meu nome é Henrique Alencar, trabalho tanto com front-end quanto com back-end, estou cursando o último do curso de Matemática Computacional na UFCA(Universidade Federal do Cariri), tenho vários projetos utilizando tecnologias como HTML, CSS, Javascripts, NodeJS, AdonisJS, React, React Native, MongoDB, MySQL, Typescript, Java, Python, C, Entre Outros.</p>
                    <button className="h-12 w-40 p-6 rounded-md border-2 border-element flex justify-center items-center text-element font-bold font-['Darker_Grotesque'] transition-all duration-200 hover:scale-110">VAMOS LÁ</button>
                </div>
            </div>
        </motion.div>
    )
}