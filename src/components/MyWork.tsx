interface MyWorkProps {
    name?: string;
    github?: string;
    website?: string;
    description?: string;
    image?: string;
}

export function MyWork({ name = "Portifolio Web", github = "", website = "", description = "", image = "" }: MyWorkProps) {
    const isEmpty = (github === "" && website === "")
    

    return (
        <div className="w-[246px] h-[320px] bg-element rounded-2xl p-3 font-['DM_Sans'] transition-all duration-500 cursor-pointer hover:scale-110 flex flex-col justify-between">
            <div className="w-[220px] h-[100px] bg-background rounded-2xl mx-auto flex items-center justify-center">
                { isEmpty ? <h1>Em Breve</h1> : <img className="w-[220px] h-[100px] rounded-2xl" src={image} alt="projeto" /> }
            </div>
            <p className="text-xs text-[#0B0B0B]">{description}</p>
            <div>
                <p className="font-medium text-[#0B0B0B] my-2">{name}</p>
                <div className="flex gap-3">
                    <a 
                        className="w-16 h-9 border p-2 flex items-center justify-center text-xs rounded-lg border-[#0B0B0B] text-[#0B0B0B] transition-colors duration-300 hover:bg-white hover:text-element" 
                        href={github}
                    >Github</a>
                    <a 
                        className="w-16 h-9 border p-2 flex items-center justify-center text-xs rounded-lg border-[#0B0B0B] text-element bg-[#0B0B0B] transition-colors duration-300 hover:bg-white" 
                        href={website}
                    >Website</a>
                </div>
            </div>
        </div>
    )
}