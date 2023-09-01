import { Button } from "@mui/material";
import "./CollapseComponent.css";
import ObjectList from "./ObjectList";
import Reac, { useState } from "react";
import CollapseListComponent from "./CollapseListComponent"


const CollapseComponent = ({ horizontalAlign }) => {
  const objects = [
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 },
    { name: 'Bob', age: 1 },
    { name: 'John', age: 1 },
    { name: 'Jane', age: 1 }
  ];
  const objects2 = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 28 },
  ];


  return (
    <div className="collapse-component">
      { 
        (horizontalAlign) &&
          <div className="horizontal-aligned-container">
            <CollapseListComponent sampleObjects={objects} listTitle={"Classes"}> </CollapseListComponent>
            <CollapseListComponent sampleObjects={objects2} listTitle={"Classes"}> </CollapseListComponent>
            <CollapseListComponent sampleObjects={objects2} listTitle={"Classes"}> </CollapseListComponent>
          </div>
      } 
    
      { 
        (!horizontalAlign) &&
          <div className="vertical-aligned-container">
            <CollapseListComponent sampleObjects={objects} listTitle={"Classes"}> </CollapseListComponent>
            <CollapseListComponent sampleObjects={objects2} listTitle={"Classes"}> </CollapseListComponent>
            <CollapseListComponent sampleObjects={objects2} listTitle={"Classes"}> </CollapseListComponent>
          </div>
      } 
    </div>
  )

  return (
    <div className="lower-half-container">
      <div className="child-container">
        <CollapseListComponent sampleObjects={objects}> </CollapseListComponent>
      </div>
      <div className="child-container">
        <CollapseListComponent sampleObjects={objects2}> </CollapseListComponent>
      </div>
      <div className="child-container">
        <CollapseListComponent sampleObjects={objects}> </CollapseListComponent>
      </div>
    </div>


  );
};

export default CollapseComponent;
