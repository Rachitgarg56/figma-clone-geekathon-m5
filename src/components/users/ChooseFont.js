import React from 'react'

const ChooseFont = () => {
  return (
    <div className="px-5 pt-4">
        <h1>Text</h1>
        <select className='bg-gray-900 mt-4'>
            <option value="">Choose a font...</option>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
        </select>
    </div>
  )
}

export default ChooseFont
