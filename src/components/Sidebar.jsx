import React from "react";
import DraggableElement from "./DraggableElement";

const elements = [
  { id: "Text", label: "📝 Text" },
  { id: "Image", label: "🖼️ Image" },
  { id: "Button", label: "🔘 Button" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>📌 Drag Elements</h3>
      {elements.map(({ id, label }) => (
        <DraggableElement key={id} id={id} label={label} />
      ))}
    </div>
  );
};

export default Sidebar;
