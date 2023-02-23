interface MyWorkProps {
    github?: string;
    website?: string;
}

export function MyWork({ github = "", website = "" }: MyWorkProps) {
    return (
        <div className="w-[246px] h-[320px] bg-element rounded-2xl p-3 font-['DM_Sans'] transition-all duration-500 cursor-pointer hover:scale-110">
            <div className="w-[220px] h-[220px] bg-background rounded-2xl mx-auto flex items-center justify-center">
                <h1>Em Breve</h1>
            </div>
            <p className="font-medium text-[#0B0B0B] my-2">Portifolio Web</p>
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
    )
}