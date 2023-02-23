import { ExperinencesList } from "./ExperiencesList"
import { motion } from "framer-motion"

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

const experiencesFrontEnd = [
    { title: "HTML", nivelExperience: "Avançado" },
    { title: "CSS", nivelExperience: "Avançado" },
    { title: "Javascript", nivelExperience: "Avançado" },
    { title: "Tailwind", nivelExperience: "Intermediário" },
    { title: "Typescript", nivelExperience: "Intermediário" },
    { title: "React", nivelExperience: "Avançado" },
]

const experiencesBackEnd = [
    { title: "NodeJS", nivelExperience: "Intermediário" },
    { title: "AdonisJS", nivelExperience: "Intermediário" },
    { title: "MySQL", nivelExperience: "Intermediário" },
    { title: "MongoDB", nivelExperience: "Iniciante" },
]

const experiencesMobile = [
    { title: "React Native", nivelExperience: "Intermediário" },
    { title: "Expo", nivelExperience: "Iniciante" },
    { title: "Tailwind", nivelExperience: "Intermediário" },
]

export function MyExperience() {

    return (
        <motion.div 
            initial={initial}
            whileInView={animate}
            transition={transition}
            id="myexperience"
            className=" flex flex-col items-center justify-center"
        >
            <h1 className="my-20 font-semibold text-element text-4xl max-sm:my-6">Minha Experiência</h1>
            <div className="flex gap-6 flex-wrap items-center justify-center max-sm:w-full">
                <ExperinencesList title="Front-End" experiences={experiencesFrontEnd} />
                <ExperinencesList title="Back-End" experiences={experiencesBackEnd} />
                <ExperinencesList title="Mobile" experiences={experiencesMobile} />
            </div>
        </motion.div>
    )
}