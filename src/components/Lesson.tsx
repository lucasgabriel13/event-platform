import { CheckCircle, Lock, Triangle } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
  handleCloseMenu: () => void;
}

export function Lesson({ title, slug, availableAt, type, handleCloseMenu }: LessonProps) {

  const { slug: slugParams } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'MM", {
    locale: ptBR,
  })

  const isActiveLesson = slug === slugParams;

  return (
    <Link to={isLessonAvailable ? `/event/lesson/${slug}` : ''} aria-disabled={isActiveLesson} className={classNames('group relative', {
      'opacity-50 cursor-not-allowed ': !isLessonAvailable
    })} onClick={handleCloseMenu}>
      {isActiveLesson && (
        <span>
          <Triangle size={20} weight="fill" className="text-green-500 rotate-[270deg] absolute left-[-10px] bottom-[30%]" />
        </span>
      )}
      <span className="text-gray-300">
        {availableDateFormat}
      </span>
      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson,
        'group-hover:border-gray-500': !isLessonAvailable
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('text-sm text-blue-500 font-medium flex items-centers gap-2', {
              'text-white': isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-centers gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={classNames('text-xs rounded px-2 py-[2px] text-white border font-bold', {
            'border-green-300': !isActiveLesson,
            'border-white': isActiveLesson
          })}>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
          {title}
        </strong>
      </div>
    </Link >
  )
}