import { Button } from "@mui/material";
import "./CollapseComp.css";
import ObjectList from "./ObjectList";
import Reac, { useState } from "react";




const CollapseButton = (sampleObjects) => {
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <div className="lower-half-container">
      {!showList &&
        <button className="button_large" onClick={handleButtonClick}>Toggle Object List</button>
      }
      {showList && 
      <div >
        <ObjectList objects={sampleObjects} />
          <button className="button_small" onClick={handleButtonClick}> Close </button>
      </div>
      } {/* Replace 'sampleObjects' with your actual object list */}

    </div>
  );
}


const CollapseComp = () => {
  const objects = [
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
  ];
  const objects2 = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 28 },
  ];
  return (
    <div className="lower-half-container">
      <div className="child-container">
        <CollapseButton sampleObjects={objects}> </CollapseButton>
      </div>
      <div className="child-container">
        <CollapseButton sampleObjects={objects2}> </CollapseButton>
      </div>
      <div className="child-container">
        <CollapseButton sampleObjects={objects}> </CollapseButton>
      </div>
    </div>


  );
};

export default CollapseComp;
