import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BreadCrumb = () => {
  return (
    <div className='w-full h-12 flex items-center justify-between px-4 md:px-10 border-y border-y-gray-400 font-bold'>
      <div className='flex gap-4 items-center md:hidden'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h1>INICIO</h1>
      </div>
      <div className='hidden md:flex text-gray-500'>
        <h1>Inicio / Productos / Playeras</h1>
      </div>
      <h1 className='text-sm font-normal text-gray-500'>8 Productos</h1>
    </div>
  )
}
