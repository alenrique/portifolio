import { EnvelopeSimple, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { Form } from "./Form";
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

export function Contact() {
    return (
        <motion.div 
            initial={initial}
            whileInView={animate}
            transition={transition}
            id="contact"
            className="my-16 flex flex-col items-center max-sm:w-[100vw]"
        >
            <h1 className="my-20 font-semibold text-element text-4xl max-sm:my-6">Contato</h1>
            <div className="flex gap-16 max-[810px]:flex-col max-[810px]:items-center max-sm:w-full">
                <div className="flex flex-col gap-6">
                    <div className="w-72 h-36 rounded-2xl bg-element text-black font-['DM_Sans'] flex flex-col gap-1 items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110">
                        <EnvelopeSimple size={32} />
                        <h1 className="text-2xl font-bold">Email</h1>
                        <p>henriquealencardev@gmail.com</p>
                        <p className="text-white">deixe uma mensagem</p>
                    </div>
                    <div className="w-72 h-36 rounded-2xl bg-element text-black font-['DM_Sans'] flex flex-col gap-1 items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110">
                        <WhatsappLogo size={32} />
                        <h1 className="text-2xl font-bold">Whatsapp</h1>
                        <p>(87)98149-0632</p>
                        <p className="text-white">deixe uma mensagem</p>
                    </div>
                    <div className="w-72 h-36 rounded-2xl bg-element text-black font-['DM_Sans'] flex flex-col gap-1 items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110">
                        <LinkedinLogo size={32} />
                        <h1 className="text-2xl font-bold">Linkedin</h1>
                        <p>linkedin.com/in/henriquealencardev</p>
                        <p className="text-white">deixe uma mensagem</p>
                    </div>
                </div>
                <Form />
            </div>
        </motion.div>
    )
}