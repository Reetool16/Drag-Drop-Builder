import { useDroppable } from "@dnd-kit/core";

const Canvas = ({ children }) => {
  const { setNodeRef } = useDroppable({ id: "canvas" });

  return (
    <div ref={setNodeRef} className="canvas">
      {children.length > 0 ? children : <p>Drag elements here</p>}
    </div>
  );
};

export default Canvas;
