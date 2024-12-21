import React, { useState } from 'react';

function DivCreator() {
  const [divs, setDivs] = useState([]);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && width && color) {
      setDivs([...divs, { height, width, color }]);
      setHeight('');
      setWidth('');
      setColor('');
    }
  };

  const handleDelete = (index) => {
    setDivs(divs.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Height (px)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Width (px)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="text"
          placeholder="Background Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add Div</button>
      </form>

      <div>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.color,
              margin: '10px',
            }}
          >
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DivCreator;
