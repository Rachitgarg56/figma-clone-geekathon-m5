import React from 'react'

const WidthHeightInputs = () => {

  return (
    <div className="px-5 py-4 flex flex-col gap-2 mt-4">

      <div className="input-container flex gap-4">
        <label className='bg-gray-900' style={{width:'20%', textAlign:'center'}}>W</label>
        <input
          className='bg-gray-900'
          style={{width:'80%'}}
          type="number"
          id="widthInput"
        //   value={width}
        //   onChange={handleWidthChange}
        />
      </div>

      <div className="input-container flex gap-4">
      <label className='bg-gray-900' style={{width:'20%', textAlign:'center'}}>H</label>
        <input
          className='bg-gray-900'
          style={{width:'80%'}}
          type="number"
          id="heightInput"
        //   value={height}
        //   onChange={handleHeightChange}
        />
      </div>
     
    </div>
  )
  
}

export default WidthHeightInputs
