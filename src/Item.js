import React, { useState } from "react";
import move from "./utils";

const Item = ({ value, setValues, values, index }) => {
  const [hide, setHide] = useState("");
  const allowDrop = e => {
    e.preventDefault();
  };
  const drag = (e, currentIndex) => {
    e.dataTransfer.setData("text", currentIndex);
    requestAnimationFrame(function() {
      setHide("hide");
    });
  };
  const endDrag = e => {
    setHide("");
  };
  const drop = e => {
    e.preventDefault();
    const oldIndex = e.dataTransfer.getData("text");
    const newIndex = e.target.getAttribute("my-index");
    const newArray = move(values, oldIndex, newIndex);
    setValues([...newArray]);
  };
  return (
    <>
      <li
        className={hide}
        draggable={true}
        onDragEnd={event => endDrag(event)}
        onDragOver={event => allowDrop(event)}
        onDragStart={event => drag(event, index)}
        onDrop={event => drop(event)}
        my-index={index}
      >
        <div>Item {value}</div>
      </li>
    </>
  );
};

export default Item;
