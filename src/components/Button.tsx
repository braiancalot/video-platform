import { DiscordLogo, Lightning } from "phosphor-react";

interface ButtonProps {
    variant: "primary" | "secondary";
}

export function Button(props: ButtonProps) {
    return (
        <>
            {props.variant === "primary" ?
                (
                    <a href="#" className="flex items-center justify-center gap-2 p-4 bg-green-500 rounded uppercase text-sm text-white font-bold hover:bg-green-700 transition-colors">
                        <DiscordLogo size={24} />
                        Comunidade no discord
                    </a>
                ) : (
                    <a href="#" className="flex items-center justify-center gap-3 p-4 border border-blue-500 rounded uppercase text-sm text-blue-500 font-bold hover:bg-blue-500 hover:text-gray-900 transition-colors">
                        <Lightning size={24} />
                        Acesse o desafio
                    </a>
                )}
        </>


    );
}