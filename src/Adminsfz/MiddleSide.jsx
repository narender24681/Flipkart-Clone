import React from "react";
import AddData from "./AddData";

export default function MiddleSide() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100%",
      }}
    >
      <div
        style={{ width: "25%", border: "1px solid grey", height: "20%" }}
      ></div>
      <div style={{ width: "75%", height: "100%", border: "1px solid grey" }}>
        <AddData />
      </div>
    </div>
  );
}
