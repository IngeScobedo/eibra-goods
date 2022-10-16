import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const NavBar = () => {
  const [clicked, setClicked] = useState(false)
  const handleToggleMenu = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <div className='w-full h-12 bg-white flex justify-between items-center px-4'>
        <button onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={faBars} className='h-5' />
        </button>
        <h1 className='text-2xl font-gothic'>Eibra Goods</h1>
        <div className='flex gap-2'>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='h-5' />
          </button>
          <button>
            <FontAwesomeIcon icon={faShoppingCart} className='h-5' />
          </button>
        </div>
      </div>
      <div className={`navbar ${clicked ? 'left-0' : '-left-[100vw]'}`}>
        <div className='w-[80vw] h-screen bg-white flex flex-col gap-2'>
          <ul className='w-full h-[calc(100vh-48px)] flex flex-col justify-center text-center items-center'>
            <li>Hombre</li>
            <li>Mujer</li>
          </ul>
        </div>
        <div onClick={handleToggleMenu} className={`w-[20vw] transition-all duration-1000 ${clicked ? 'glass opacity-100' : 'opacity-0'}`} />
      </div>
    </>
  )
}
