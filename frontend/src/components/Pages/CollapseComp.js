import { Button } from "@mui/material";
import "./CollapseComp.css";

const CollapseComp = () => {
  return (
    <div className="lower-half-container">
      <div className="child-container">
        <button className="button"> b</button>
      </div>
      <div className="child-container">
        <button className="button"> b</button>
      </div>
      <div className="child-container">
        <button className="button"> b</button>
      </div>
    </div>


  );
};

export default CollapseComp;
