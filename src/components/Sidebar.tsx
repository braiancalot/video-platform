import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: Date;
        lessonType: "live" | "class";
    }[]
}

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            availableAt
            id
            lessonType
            slug
            title
        }
    }
`;

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl block pb-6 mb-6 border-b border-gray-600">
                Cronograma das aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => (
                    <Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                    />
                ))}
            </div>

        </aside>
    );
}