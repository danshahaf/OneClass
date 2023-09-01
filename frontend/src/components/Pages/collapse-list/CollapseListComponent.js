import { Button } from "@mui/material";
import "./CollapseListComponent.css";
import ObjectList from "./ObjectList";
import { useState } from "react";


const CollapseListComponent = ({sampleObjects, listTitle}) => {
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <div className="list-container">  
      <div className="list-container-content">

        {!showList &&
          <button className="expand-button" onClick={handleButtonClick}>Toggle Object List</button>
        }
        {showList && 
          <div>
            <ObjectList objects={sampleObjects} listTitle={listTitle} />
            <button className="minimize-button" onClick={handleButtonClick}> Close </button>
          </div>
        } {/* Replace 'sampleObjects' with your actual object list */}
      </div>
    </div>
  );
};


export default CollapseListComponent;