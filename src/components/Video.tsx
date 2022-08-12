import { CaretRight, DiscordLogo, FileArrowDown, Image } from "phosphor-react";
import { Button } from "./Button";
import { Footer } from "./Footer";

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video"></div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto mb-20">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl">
                            Aula 01 - Criando o projeto e realizando o setup inicial
                        </h1>
                        <p className="text-gray-200 mt-4 leading-relaxed">
                            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS,
                            Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades
                            da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                        </p>
                        <div className="flex mt-6 gap-4 items-center">
                            <img
                                className="w-16 h-16 border-2 border-blue-500 rounded-full"
                                src="https://avatars.githubusercontent.com/u/41172933?v=4"
                                alt="Avatar" />
                            <div className="leading-relaxed">
                                <strong className="text-2xl font-bold block">
                                    Braian Calot
                                </strong>
                                <p className="text-gray-200 text-sm block">
                                    Web Development
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Button variant="primary" />
                        <Button variant="secondary" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-20">
                    <a href="#" className="flex rounded overflow-hidden bg-gray-700 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 flex items-center justify-center px-6">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="flex justify-between items-center gap-16 p-6 ">
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl">
                                    Material complementar
                                </strong>
                                <p className="text-gray-200 mt-2 text-sm">
                                    Acesse o material complementar para acelerar o seu desenvolvimento
                                </p>
                            </div>
                            <CaretRight size={40} className="text-blue-500" />
                        </div>
                    </a>

                    <a href="#" className="flex rounded overflow-hidden bg-gray-700 hover:bg-gray-600">
                        <div className="bg-green-700 flex items-center justify-center px-6">
                            <Image size={40} />
                        </div>
                        <div className="flex justify-between items-center gap-16 p-6 ">
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl">
                                    Wallpapers exclusivos
                                </strong>
                                <p className="text-gray-200 mt-2 text-sm">
                                    Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                                </p>
                            </div>
                            <CaretRight size={40} className="text-blue-500" />
                        </div>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
}