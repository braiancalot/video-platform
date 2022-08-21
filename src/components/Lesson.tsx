import { CheckCircle, Lock } from "phosphor-react"
import { isPast, format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: "live" | "class";
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>();

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'H'h'mm", { locale: ptBR });


    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div className={classNames("rounded border border-gray-600 mt-2 p-4 group-hover:border-green-500 relative", {
                "bg-green-500": isActiveLesson
            })}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ?
                        (
                            <span className={classNames("text-sm font-medium  flex gap-2 items-center justify-center", {
                                "text-white": isActiveLesson,
                                "text-blue-500": !isActiveLesson
                            })}>
                                <CheckCircle size={20} />
                                Conteúdo liberado
                            </span>
                        ) : (
                            <span className="text-sm font-medium text-orange-500 flex gap-2 items-center justify-center">
                                <Lock size={20} />
                                Em breve
                            </span>
                        )}
                    <span className={classNames("text-xs font-bold text-white py[0.125rem] px-2 border rounded", {
                        "border-white": isActiveLesson,
                        "border-green-300": !isActiveLesson
                    })}>
                        {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
                    </span>
                </header>
                <strong className={classNames("font-bold mt-5 block", {
                    "text-white": isActiveLesson,
                    "text-gray-200": !isActiveLesson
                })}>
                    {props.title}
                </strong>

                {isActiveLesson && (<div className="h-full absolute top-0 left-[-5px] flex items-center">
                    <div className="h-[14px] w-[14px] bg-green-500 rounded rotate-45 left-[-5px]"></div>
                </div>)}
            </div>
        </Link >
    );
}