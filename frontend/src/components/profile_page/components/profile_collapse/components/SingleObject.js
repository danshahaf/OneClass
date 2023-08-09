import React from "react";
import "./SingleObject.css";

const SingleObject = ({obj}) => {
    console.log("SingleObject input type: ", typeof(obj))
    const name = obj.name;
    const age =  obj.age;
    return (
    <div>
        <div className="ObjectItemBox">
            <span className="ObjectListLabels">Name:</span>
            <span className="ObjectListValues">{name}</span>
        </div>
        <div className="ObjectItemBox">
            <span className="ObjectListLabels">Age:</span>
            <span className="ObjectListValues">{age}</span>
        </div>
    </div>

    );
}

export default SingleObject;