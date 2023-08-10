import React from 'react';
import './ObjectList.css'; // Import the CSS file
import SingleObject from './SingleObject';


// given a list of objects, title to display above list, and the width of the component as percentage
const ObjectList = ({objects, title}) => {
  console.log("ObjectList input type: \n  objects:  ", typeof(objects), "   ", objects, "\n  title:  ", typeof(title), "   ", title)

  return (
    <div className="ObjectList">
      <h2 className="ObjectList_Title">{title}:</h2>
      <ul className="ObjectList_List">
        {objects.map((object, index) => (
          <li key={index} className="ObjectList_Item">
            <SingleObject obj={object}> </SingleObject>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;
