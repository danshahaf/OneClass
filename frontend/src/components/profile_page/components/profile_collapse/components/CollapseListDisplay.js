
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
    <div className="CollapseListDisplay">
      {!showList &&
        <button className="CollapseListDisplay_ExpandButton" onClick={handleButtonClick}>View {title}</button>
      }
      {showList && 
      <div>
        <ObjectList objects={sampleObjects} title={title}> </ObjectList>
        <div className='CollapseListDisplay_ExpandButton_Container'>
            <button className="CollapseListDisplay_CollapseButton" onClick={handleButtonClick}> Close </button>
        </div>
      </div>

      } {/* Replace 'sampleObjects' with your actual object list */}

    </div>
  );
}

export default CollapseListDisplay;
