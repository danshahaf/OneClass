
import React, { useState } from 'react';
import ObjectList from './ObjectList';
import "./CollapseListDisplay.css"

const CollapseListDisplay = ({sampleObjects, title}) => {
  console.log("CollapseListDisplay input type: \n  objects:  ", typeof(sampleObjects), "   ", sampleObjects, "\n  title:  ", typeof(title), "   ", title)


  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <div className="lower-half-container">
      {!showList &&
        <button className="button_large" onClick={handleButtonClick}>View {title}</button>
      }
      {showList && 
      <div >
        <ObjectList objects={sampleObjects} title={title} />
          <button className="button_small" onClick={handleButtonClick}> Close </button>
      </div>
      } {/* Replace 'sampleObjects' with your actual object list */}

    </div>
  );
}

export default CollapseListDisplay;
