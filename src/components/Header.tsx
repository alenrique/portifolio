export function Header() {
    return (
        <header className="flex items-center justify-end p-5 text-white gap-6 max-sm:scale-75 max-sm:justify-center max-sm:text-lg">
            <a className="hover:text-purple-700 transition-colors duration-300" href="#home">Home</a>
            <a className="hover:text-purple-700 transition-colors duration-300" href="#aboutme">Sobre Mim</a>
            <a className="hover:text-purple-700 transition-colors duration-300" href="#myexperience">Minha Experiência</a>
            <a className="hover:text-purple-700 transition-colors duration-300" href="#myportifolio">Meu Portifolio</a>
            <a className="hover:text-purple-700 transition-colors duration-300" href="#contact">Contato</a>
        </header>
    )
}