import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons'

export const Hero = () => {
  const videoUrl = new URL('../../../assets/videos/vhs.mp4', import.meta.url).href

  return (
    <div className='w-full h-screen bg-black relative'>
      <video src={videoUrl} className='w-full h-full object-cover object-center' autoPlay muted loop />
      <div className='w-auto absolute bottom-10 left-[50%] -translate-x-[50%] text-white font-gothic flex flex-col items-center gap-2'>
        <h1 className='text-4xl md:text-5xl'>Scroll Down</h1>
        <FontAwesomeIcon icon={faComputerMouse} className='h-6' />
      </div>
    </div>
  )
}
