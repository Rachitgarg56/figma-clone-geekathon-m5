import React from 'react'
import logo from '../assets/public/assets/logo.svg'
import { navElements } from '../assets/constants'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 py-2' style={{border:'1px solid white'}}>
      <img src={logo} alt="FigPro Logo" width={58} height={20} />

      <ul className='flex flex-row'>

        {navElements.map((item) => (
          <li
            key={item.name}
          >
            {/* {Array.isArray(item.value) ? (
              <ShapesMenu/>
            ) : item?.value === 'comments' ? (
              <NewThread>

              </NewThread>
            ): (
              <button></button>
            )} */}
          </li>
        ))}

      </ul>

      <div className='avatar rounded-full h-7 w-7 bg-white'></div>
    </nav>
  )
}

export default Navbar
