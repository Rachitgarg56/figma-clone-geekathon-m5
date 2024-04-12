import React, { useState } from 'react';

function ChooseFontWeight() {
  // State to track selected font weights
  const [fontWeightNum, setFontWeightNum] = useState('');
  const [fontWeightText, setFontWeightText] = useState('');

  // Function to handle font weight selection (numeric)
  const handleFontWeightNumChange = (event) => {
    setFontWeightNum(event.target.value);
  };

  // Function to handle font weight selection (text)
  const handleFontWeightTextChange = (event) => {
    setFontWeightText(event.target.value);
  };

  return (
    <div className="flex px-5 py-4 gap-2">
      <div className="left-container w-1/2">
        <select className='bg-gray-900 w-full' value={fontWeightNum} onChange={handleFontWeightNumChange}>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
        </select>
      </div>
      <div className="right-container w-1/2">
        <select className='bg-gray-900 w-full' value={fontWeightText} onChange={handleFontWeightTextChange}>
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="bolder">Bolder</option>
          <option value="lighter">Lighter</option>
          <option value="100">Thin</option>
          <option value="200">Extra Light</option>
          <option value="300">Light</option>
          <option value="400">Regular</option>
          <option value="500">Medium</option>
          <option value="600">Semi Bold</option>
          <option value="700">Bold</option>
          <option value="800">Extra Bold</option>
          <option value="900">Black</option>
        </select>
      </div>
    </div>
  );
}

export default ChooseFontWeight;
