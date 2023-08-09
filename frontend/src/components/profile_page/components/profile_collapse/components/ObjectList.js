import React from 'react';
import './ObjectList.css'; // Import the CSS file
import SingleObject from './SingleObject';



const ObjectList = ({objects, title}) => {
  console.log("ObjectList input type: \n  objects:  ", typeof(objects), "   ", objects, "\n  title:  ", typeof(title), "   ", title)

  return (
    <div className="ObjectListContainer">
      <h2 className="ObjectListHeader">{title}:</h2>
      <ul className="ObjectList">
        {objects.map((object, index) => (
          <li key={index} className="ObjectListItem">
            <SingleObject obj={object}> </SingleObject>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;
