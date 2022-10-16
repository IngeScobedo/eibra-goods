import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const [clicked, setClicked] = useState(false)
  const handleToggleMenu = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <nav className='w-full h-12 bg-white flex justify-between items-center px-4 font-body z-10 fixed top-0'>
        {/* Toggle Menu */}
        <button className='h-5 lg:hidden' onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* Title/logo */}
        <Link to='/' className='font-gothic text-2xl absolute left-[50%] -translate-x-[50%] lg:relative lg:left-0 lg:-translate-x-0'>Eibra Goods</Link>

        <ul className='hidden w-auto lg:flex gap-4 text-center items-center'>
          <li>Playeras</li>
          <li>Hoddies</li>
          <li>Gorros</li>
        </ul>
        <div className='flex gap-2 lg:gap-4'>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='h-5 lg:hidden' />
            <span className='hidden lg:block'>Lista de deseos (0)</span>
          </button>
          <Link to='/carrito'>
            <FontAwesomeIcon icon={faShoppingCart} className='h-5 lg:hidden' />
            <span className='hidden lg:block'>Carrito (0)</span>
          </Link>
        </div>
      </nav>
      <div className={`navbar ${clicked ? 'left-0' : '-left-[100vw]'}`}>
        <div className='w-[80vw] h-screen bg-white flex flex-col gap-2'>
          <ul className='w-full h-scren flex flex-col justify-center text-center items-center font-body'>
            <li>Playeras</li>
            <li>Hoddies</li>
            <li>Gorros</li>
          </ul>
        </div>
        <div onClick={handleToggleMenu} className={`w-[20vw] transition-all duration-1000 ${clicked ? 'glass opacity-100' : 'opacity-0'}`} />
      </div>
    </>
  )
}
