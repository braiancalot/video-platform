import { DefaultUi, Player, Youtube } from "@vime/react";

import { CaretRight, FileArrowDown, Image } from "phosphor-react";
import { Button } from "./Button";
import { Footer } from "./Footer";

import "@vime/core/themes/default.css"
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
    lessonSlug: string
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        },
        fetchPolicy: "no-cache",
    });

    if (!data || !data.lesson) {
        return (<div className="flex-1">Carregando</div>);
    }
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto mb-20">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl">
                            {data.lesson.title}
                        </h1>
                        <p className="text-gray-200 mt-4 leading-relaxed">
                            {data.lesson.description}
                        </p>
                        {data.lesson.teacher && (<div className="flex mt-6 gap-4 items-center">
                            <img
                                className="w-16 h-16 border-2 border-blue-500 rounded-full"
                                src={data.lesson.teacher.avatarURL}
                                alt="Avatar" />
                            <div className="leading-relaxed">
                                <strong className="text-2xl font-bold block">
                                    {data.lesson.teacher.name}
                                </strong>
                                <p className="text-gray-200 text-sm block">
                                    {data.lesson.teacher.bio}
                                </p>
                            </div>
                        </div>)}

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