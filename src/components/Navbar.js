import React from 'react'
import logo from '../assets/public/assets/logo.svg'
import selectIcon from '../assets/public/assets/select.svg';
import shapeElementsIcon from '../assets/public/assets/rectangle.svg';
import textIcon from '../assets/public/assets/text.svg';
import deleteIcon from '../assets/public/assets/delete.svg';
import resetIcon from '../assets/public/assets/reset.svg';
import commentsIcon from '../assets/public/assets/comments.svg';


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 py-2' style={{border:'1px solid white'}}>
      <img src={logo} alt="FigPro Logo" width={58} height={20} />

      <ul className='flex flex-row items-center gap-8'>

        <li className='w-6 h-6' ><img alt='' className='w-full h-full' src={selectIcon} /></li>
        <li className='w-6 h-6' ><img alt='' className='w-full h-full' src={shapeElementsIcon} /></li>
        <li className='w-6 h-6' ><img alt='' className='w-full h-full' src={textIcon} /></li>
        <li className='w-6 h-6' ><img alt='' className='w-full h-full' src={deleteIcon} /></li>
        <li className='w-6 h-6' ><img alt='' className='w-full h-full' src={resetIcon} /></li>
        <li className='w-6 h-6' ><img alt='' className='w-full h-full' src={commentsIcon} /></li>

      </ul>

      <div className='avatar rounded-full h-7 w-7 bg-white'></div>
    </nav>
  )
}

export default Navbar
