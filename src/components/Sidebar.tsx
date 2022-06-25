import { List, X } from "phosphor-react";
import { useState } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {

  const { data } = useGetLessonsQuery();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <>
      <div className="flex gap-2 items-center fixed top-5 right-6 md:hidden z-[51]">
        <span>Aulas</span>
        <button
          className="text-blue-500"
          onClick={handleToggleMenu}
        >
          {isMenuOpened ? (<X size={30} />) : (<List size={30} />)}

        </button>
      </div>
      <aside className={`${!isMenuOpened && 'sr-only'} p-6 fixed left-0 top-[75px] z-[50] w-screen h-[calc(100vh-75px)] overflow-y-auto md:relative md:top-0 md:not-sr-only md:w-[348px] bg-gray-700 md:p-6 border-l border-gray-600 rounded-b-lg`}>
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">
          Cronograma de aulas
        </span>

        <div className="flex flex-col gap-8">
          {data?.lessons.map(lesson => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              handleCloseMenu={handleToggleMenu}
            />
          ))}
        </div>
      </aside>
    </>
  )
}