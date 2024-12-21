// Exercice2.js
import React from 'react';
import DisplayTab from './DisplayTab';

const Exercice2 = () => {
  // Define two different tables to pass as props
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "cherry", "date"];

  return (
    <div>
      
      {/* Task 1: Display Table as an Unordered List */}
      <div>
        <h3>Task 1: Display Table as List</h3>
        <DisplayTab tab={tab1} displayType="list" />
      </div>

      {/* Task 2: Display Table with Element Number */}
      <div>
        <h3>Task 2: Display Table with Element Number</h3>
        <DisplayTab tab={tab1} displayType="numbered" />
      </div>

      {/* Task 3: Display Table with Click to Remove */}
      <div>
        <h3>Task 3: Display Table with Click to Remove</h3>
        <DisplayTab tab={tab1} displayType="removable" />
      </div>

      {/* Task 4: Parameterized Table Display */}
      <div>
        <h3>Task 4: Parameterized Table Display</h3>
        <DisplayTab tab={tab2} displayType="list" />
      </div>

      {/* Task 5: Display Two Tables */}
      <div>
        <h3>Task 5: Display Two Different Tables</h3>
        <DisplayTab tab={tab1} displayType="list" />
        <DisplayTab tab={tab2} displayType="list" />
      </div>
    </div>
  );
};

export default Exercice2;
