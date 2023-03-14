import React from 'react';

const SetColorDiv = ({ colors }) => {
  return (
    <div className='color_container'>
      {colors.map((color, index) => (
        <div key={index} className='div_color' style={{ backgroundColor: color }}>
          
        </div>
      ))}
    </div>
  );
};

export default SetColorDiv;