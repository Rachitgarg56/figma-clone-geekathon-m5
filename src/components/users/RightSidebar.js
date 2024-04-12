import React from 'react'
import ChooseFont from './ChooseFont'
import ChooseFontWeight from './ChooseFontWeight'
import WidthHeightInputs from './WidthHeightInputs'

const RightSidebar = () => {
  return (
    <section className='flex flex-col border-t border-primary-grey-200 bg-black w-96 text-white min-2-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20'>
      
        <h3 className='px-5 pt-4 text-xs uppercase'>Design</h3>
        <h2 className='px-5 pt-4 text-sm'>Make changes to canvas you like</h2>

        {/* width-height-inputs */}
        <WidthHeightInputs/>
      
        <ChooseFont/>

        <ChooseFontWeight/>

        {/* color-input */}
        <div className='px-5 py-4 flex flex-col gap-3'>
          <h6 className='text-xs'>COLOR</h6>
          <div>
            <input type='color' />
            <span></span>
          </div>
        </div>

        {/* stroke-input */}
        <div className='px-5 py-4 flex flex-col gap-3'>
          <h6 className='text-xs'>STROKE</h6>
          <div>
            <input type='color' />
            <span></span>
          </div>
        </div>

        {/* export as pdf */}
        <div className='px-5 py-4 flex flex-col gap-3'>
          <h6 className='text-xs'>EXPORT</h6>
          <button style={{border:'1px solid gray', width:'100%', margin:'auto'}}>Export to PDF</button>
        </div>
    
    
    </section>
  )
}

export default RightSidebar
