import { useDraggable } from "@dnd-kit/core";

const DraggableElement = ({ id, label }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className="draggable">
      {label}
    </div>
  );
};

export default DraggableElement;
