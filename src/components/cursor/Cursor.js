import React from 'react'
import CursorSVG from '../../assets/public/assets/CursorSVG'

const Cursor = ({ color, x, y, message }) => {
  return (
    <div className='pointer-events-none absolute top-0 left-0' style={{transform: `translateX(${x}px) translateY(${y}px)`}}>
        <CursorSVG color={color} />

        {message && (
            <div className='absolute left-2 top-5
            rounded-3xl px-4 py-2' style={{backgroundColor: color}}>
                <p className='text-white whitespace-nowrap
                text-sm leading-relaxed'>{message}</p>
            </div>
        )}
    </div>
  )
}

export default Cursor
