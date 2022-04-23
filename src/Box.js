import React from "react";
import "./Box.css";



const Box = ({ id, color, height, width, removeBox }) => {
    const handleRemoveBox = () => {removeBox(id)}

    return (
        <div className="Box">
            <div style={{
                backgroundColor: color, 
                height: `${height}px`, 
                width: `${width}px`}}>
            </div>
            <button onClick={handleRemoveBox}>X</button>
        </div>
      )
}



export default Box;