import { useState } from "react";
import { nanoid } from "nanoid";
import { useAuth } from "../AuthContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask, group } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addingTask({ title, description, completed: false });
      setTitle("");
      setDescription("");
    }
  };
  const addingTask = async (task) => {
    const taskObj = {
      ...task,
      id: nanoid(),
      groupId: group,
    };
    addTask(taskObj);
  };

  const inputStyledComp =
    "outline-none border border-grey-800 p-2 rounded-md w-full";
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mb-4 items-start md:gap-6 gap-2 mt-10 w-full"
    >
      <input
        className={`${inputStyledComp}`}
        autoFocus
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={`${inputStyledComp}`}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 p-2 rounded-md px-4 text-white font-semibold md:text-base text-sm "
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
