import { Hero } from '../components/Hero'

export const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-300 snap-y snap-mandatory overflow-scroll'>
      <div className='snap-center'>
        <Hero />
      </div>
      <div className='w-full h-[200vh] snap-start'>
        {/*  */}
      </div>
    </div>
  )
}
