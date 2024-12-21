// DisplayTab.js
import React, { useState } from 'react';

const DisplayTab = ({ tab, displayType }) => {
  const [items, setItems] = useState(tab);

  const handleItemClick = (index) => {
    setItems(items.filter((_, i) => i !== index)); // Remove clicked item
  };

  const renderList = () => {
    if (displayType === "numbered") {
      return items.map((item, index) => (
        <li key={index}>
          Element {index + 1} is: {item}
        </li>
      ));
    }
    if (displayType === "removable") {
      return items.map((item, index) => (
        <li key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer' }}>
          {item}
        </li>
      ));
    }
    // Default to normal list display
    return items.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  };

  return <ul>{renderList()}</ul>;
};

export default DisplayTab;
