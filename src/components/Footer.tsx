import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
    return (
        <footer className="bg-element w-full h-80 text-black font-['DM_Sans'] flex flex-col items-center gap-10 p-10">
            <h1 className="text-4xl font-bold">Obrigado!</h1>
            <div className="flex gap-6">
                <a className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center transition-colors duration-300 hover:bg-white" href="https://www.linkedin.com/in/henriquealencardev/">
                    <LinkedinLogo className="text-element" size={32} />
                </a>
                <a className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center transition-colors duration-300 hover:bg-white" href="https://github.com/alenrique">
                    <GithubLogo className="text-element" size={32} />
                </a>
            </div>
            <p>©Henrique Alencar. Todos os direitos reservados</p>
        </footer>
    )
}