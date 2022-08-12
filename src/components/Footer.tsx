import { RocketseatLogo } from "./RocketseatLogo";

export function Footer() {
    return (
        <div className="mx-6">
            <div className="w-full max-w-[1100px] mx-auto py-6 border-t border-gray-500 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-300">
                        <RocketseatLogo />
                    </a>

                    <span className="text-gray-300">
                        Rocketseat - Todos os direitos reservados
                    </span>
                </div>

                <a href="#" className="text-gray-300">
                    Políticas de privacidade
                </a>
            </div>
        </div>

    );
}