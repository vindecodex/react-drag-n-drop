import React, { useState, useEffect } from "react";
import "./List.css";
import Item from "./Item";

const List = () => {
  const [values, setValues] = useState(["A", "B", "C", "D", "E"]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <>
      {values.map((value, index) => (
        <Item
          key={index}
          index={index}
          value={value}
          values={values}
          setValues={setValues}
        />
      ))}
    </>
  );
};

export default List;
