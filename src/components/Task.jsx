import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../AuthContext";

const Task = ({ task }) => {
  const { completeTask, deleteTask } = useAuth();
  return (
    <div
      className={`bg-white relative flex flex-col items-start shadow px-4 py-2 w-full mr-4 rounded text-sm animate-fade-in`}
    >
      <div
        onClick={() => deleteTask(task?.id)}
        className="hover:bg-red-600 rounded-full hover:text-white p-1 absolute top-2 right-2"
      >
        <AiOutlineClose />
      </div>
      <h3 className="text-lg font-semibold">{task?.title}</h3>
      <p className="text-gray-600 text-xs max-w-full text-clip overflow-hidden">
        {task?.description}
      </p>
      <button onClick={() => completeTask(task?.id)}>
        <span
          className={`font-semibold ${
            task?.completed ? "text-green-600 " : "text-red-600 "
          }`}
        >
          {task?.completed ? "Complete" : "Incomplete"}
        </span>
      </button>
    </div>
  );
};

export default Task;
