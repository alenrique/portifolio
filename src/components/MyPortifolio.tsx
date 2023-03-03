import { MyWork } from "./MyWork";
import { motion } from "framer-motion";
import ImageHabit from "../assets/2023-02-23.png"
import ImageTweet from "../assets/2023-03-01.png"

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

const works = [
    {
        name: "Habits",
        github: "https://github.com/alenrique/portifolio",
        website: "https://nlw-setup-henrique.vercel.app/",
        description: "O Projeto do NLW-Setup que une tecnologias como ReactJS, RadixUI, TailwindCSS, etc para front-end e NodeJS, Fastify, Prisma, SQLite, etc para back-end, contando com a versão mobile feito com tecnologias como React Native, Expo, etc.",
        image: ImageHabit
    },
    {
        name: "Twitter Clone",
        github: "https://github.com/alenrique/twitter-clone",
        website: "https://cloning-twitter.vercel.app/",
        description: "Um clone do twitter que usa tecnologias como ReactJS, RadixUI, TailwindCSS, etc para front-end e NodeJS, Express, Prisma, PostgreSQL, etc para back-end.",
        image: ImageTweet
    }
]

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
                {
                    works.map(work => (
                        <MyWork key={work.github} name={work.name} github={work.github} website={work.website} description={work.description} image={work.image} />
                    ))
                }
                <MyWork />
                <MyWork />
                <MyWork />
                <MyWork />
            </div>
        </motion.div>
    )
}
