import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaGripLines } from "react-icons/fa";
import { useAuth } from "../AuthContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks, user, reorderTasks } = useAuth();

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    reorderTasks(result.source.index, result.destination.index);
  };

  const taskManagementVisible = !!tasks?.length;

  return (
    <div className="flex flex-wrap w-full max-h-screen ">
      {!taskManagementVisible && (
        <div className="mx-auto">No task added yet🥺</div>
      )}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="taskList" direction="vertical">
          {(provided) =>
            taskManagementVisible && (
              <div
                className="w-full"
                style={{ overflow: "visible" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks?.map((task, index) => (
                  <Draggable key={index} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        key={task.id}
                        className="flex w-full gap-2 ease-in-out delay-300"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="flex items-center cursor-move">
                          <FaGripLines />
                        </div>
                        <Task task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
