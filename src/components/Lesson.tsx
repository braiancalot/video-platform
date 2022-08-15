import { CheckCircle, Lock } from "phosphor-react"
import { isPast, format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Link } from "react-router-dom";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: "live" | "class";
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'H'h'mm", { locale: ptBR });

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div className="rounded border border-gray-600 mt-2 p-4 group-hover:border-green-500">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ?
                        (
                            <span className="text-sm font-medium text-blue-500 flex gap-2 items-center justify-center">
                                <CheckCircle size={20} />
                                Conteúdo liberado
                            </span>
                        ) : (
                            <span className="text-sm font-medium text-orange-500 flex gap-2 items-center justify-center">
                                <Lock size={20} />
                                Em breve
                            </span>
                        )}
                    <span className="text-xs font-bold text-white py[0.125rem] px-2 border rounded border-green-300">
                        {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
                    </span>
                </header>
                <strong className="font-bold text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </Link>
    );
}