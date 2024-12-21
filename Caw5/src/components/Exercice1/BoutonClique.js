import React, { useState } from 'react';

function ClickButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(true)}>Click Me</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}

export default ClickButton;
