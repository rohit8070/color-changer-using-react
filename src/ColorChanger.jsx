import { useState } from "react";
import "./ColorChanger.css";

export default function ColorChanger() {
  let [color, setcolor] = useState("");

  return (
    <div>
      <div className="box" style={{ backgroundColor: color }}></div>
      <input
        type="text"
        value={color}
        onChange={(e) => {
          setcolor(e.target.value);
        }}
      />
    </div>
  );
}
