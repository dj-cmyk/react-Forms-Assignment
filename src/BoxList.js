import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css"


const BoxList = () => {
    const INITIAL_STATE = []
      const [boxes, setBoxes] = useState(INITIAL_STATE);
      
      const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
      }

      const removeBox = (id) => {
          setBoxes(boxes => boxes.filter(box => box.id !== id))
      }

      return (
        <div className="BoxList">
          <h3 className="BoxList-header">BoxList</h3>
          <div className="BoxList-form">
            <NewBoxForm addBox={addBox} />
          </div>
          <div className="BoxList-box">
            {boxes.map(({ id, color, height, width }) => <Box color={color} height={height} width={width} key={id} id={id}removeBox={removeBox}/>)}
          </div>
    
        </div>
      )
}



export default BoxList;
