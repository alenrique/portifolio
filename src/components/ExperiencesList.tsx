import { CircleWavyCheck } from "phosphor-react";

interface ExperinencesListProps {
    title: string;
    experiences: {
        title: string;
        nivelExperience: string;
    }[]
}

export function ExperinencesList({ title, experiences }: ExperinencesListProps) {
    return (
        <div className="w-[480px] h-[294px] bg-[#7800A180] rounded-2xl flex flex-col items-center p-6 max-sm:scale-75 max-sm:w-[400px] max-sm:h-[260px]">
            <h1 className="mb-5 text-[#0B0B0B] text-2xl font-bold font-['DM_Sans']">{title}</h1>
            <ul className="grid grid-cols-2 gap-x-24 gap-y-5 max-sm:gap-x-16 max-sm:gap-y-4">
                {experiences.map(element => (
                    <li key={element.title} className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <CircleWavyCheck className="text-element" size={18} weight="fill" />
                            <p className="font-['DM_Sans'] font-bold uppercase">{element.title}</p>
                        </div>
                        <p className="ml-6 text-xs opacity-80">{element.nivelExperience}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}