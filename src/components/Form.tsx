import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(name === "" || email === "" || message === ""){
            alert("Preencha todos os campos do formulário")
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }
    
        emailjs.send('service_xow5of8', 'template_y7d7cva', templateParams, 'qsdv2gD28kc2rAlK7')
          .then((result) => {
              console.log(result.text);
              setName('')
              setEmail('')
              setMessage('')
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <form className="flex flex-col gap-6 max-[810px]:items-center" onSubmit={sendEmail}>
            <input 
                className="bg-background border-2 border-element w-[712px] h-20 p-6 rounded-2xl placeholder:text-white placeholder:text-3xl placeholder:font-['DM_Sans'] max-sm:w-[356px] max-sm:h-[40px]"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            
            <input 
                className="bg-background border-2 border-element w-[712px] h-20 p-6 rounded-2xl placeholder:text-white placeholder:text-3xl placeholder:font-['DM_Sans'] max-sm:w-[356px] max-sm:h-[40px]"
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <textarea 
                className="bg-background border-2 border-element w-[712px] h-40 p-6 rounded-2xl placeholder:text-white placeholder:text-3xl placeholder:font-['DM_Sans'] max-sm:w-[356px]"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />

            <input className="bg-element w-48 h-16 rounded-2xl cursor-pointer transition-colors duration-300 hover:bg-white hover:text-element" type="submit" value="Enviar" />
        </form>
    );
}