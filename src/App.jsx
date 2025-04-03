import React, { useState } from "react";
import {
  DndContext,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import "./App.css";

const elementsData = [
  { id: "Text", label: "📝 Text" },
  { id: "Image", label: "🖼️ Image" },
  { id: "Button", label: "🔘 Button" },
];

const App = () => {
  const [elements, setElements] = useState([]);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const draggedElement = elementsData.find((el) => el.id === active.id);
    if (!draggedElement) return;

    setElements((prevElements) => [
      ...prevElements,
      { ...draggedElement, id: Date.now() },
    ]);
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="app">
        <Sidebar />
        <Canvas>
          {elements.map((el) => (
            <div key={el.id} className="element">
              {el.label}
            </div>
          ))}
        </Canvas>
      </div>
    </DndContext>
  );
};

export default App;
