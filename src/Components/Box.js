import React from "react";
import "./Box.css";

export default function Box(props) {
  return (
    <div className="boxes" id={`${props.tempid}`} onClick={props.method}>
      {props.content}
    </div>
  );
}
