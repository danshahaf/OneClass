import React from 'react';
import './ObjectList.css'; // Import the CSS file

const ObjectList = ({ objects }) => {
  return (
    <div className="ObjectListContainer">
      <h2 className="ObjectListHeader">List of Objects:</h2>
      <ul className="ObjectList">
        {objects.sampleObjects.map((object, index) => (
          <li key={index} className="ObjectListItem">
            <div className="ObjectItemBox">
              <span className="ObjectListLabels">Name:</span>
              <span className="ObjectListValues">{object.name}</span>
            </div>
            <div className="ObjectItemBox">
              <span className="ObjectListLabels">Age:</span>
              <span className="ObjectListValues">{object.age}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;
